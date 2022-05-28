import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCats, { IFetchedCat } from "./components/AllCats/AllCats";
import { useState } from "react";
import FavouriteCats from "./components/AllCats/FavouriteCats/FavouriteCats";

function App() {
  const [favouriteCats, setFavouriteCats] = useState<IFetchedCat[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  const addCatToFavourites = (cat: IFetchedCat) => {
    setFavouriteCats([...favouriteCats, cat]);
  };

  const deleteCatFromFavouties = (cat: IFetchedCat) => {
    setFavouriteCats(
      favouriteCats.filter((favouriteCat) => favouriteCat.id !== cat.id)
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <Routes>
          <Route
            path={"/"}
            element={
              <AllCats
                addCat={addCatToFavourites}
                deleteCat={deleteCatFromFavouties}
              />
            }
          />
          <Route
            path={"/favourite"}
            element={
              <FavouriteCats
                cats={favouriteCats}
                addCat={addCatToFavourites}
                deleteCat={deleteCatFromFavouties}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
