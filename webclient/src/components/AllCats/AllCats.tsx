import React from "react";
import styles from "./allcats.module.scss";
import { useState, useEffect } from "react";
import CatCard from "./CatCard/CatCard";
import axios from "axios";

export interface IFetchedCat {
  breeds: any[];
  categories: any[];
  height: number;
  id: string;
  url: string;
  width: number;
}

interface IAllCatsProps {
  addCat: (cat: IFetchedCat) => void;
  deleteCat: (cat: IFetchedCat) => void;
}

export default function AllCats(props: IAllCatsProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [cats, setCats] = useState<IFetchedCat[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.thecatapi.com/v1/images/search?size=thumb&order=ASC&limit=15",
        {
          headers: {
            "x-api-key": "47141282-7d4d-472e-a590-bf90ac3c1e76",
            limit: 15,
            size: "thumb",
          },
        }
      )
      .then((data) => {
        setCats(data.data);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) {
    return <h2>Loading ...</h2>;
  } else {
    console.log(cats);
    return (
      <div className={styles.container}>
        {cats.map((cat, index: number) => (
          <CatCard
            key={index}
            cat={cat}
            addCat={props.addCat}
            deleteCat={props.deleteCat}
          />
        ))}
        ,
      </div>
    );
  }
}
