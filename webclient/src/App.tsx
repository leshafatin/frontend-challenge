import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCats, { IFetchedCat } from "./components/AllCats/AllCats";
import { useState } from "react";

const API_KEY = "47141282-7d4d-472e-a590-bf90ac3c1e76";

function App() {
  const [favouriteCats, setFavouriteCats] = useState<IFetchedCat[]>([]);

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
      <Header activeTab={1} />
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
