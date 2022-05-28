import React from "react";
import { IFetchedCat } from "../AllCats";
import CatCard from "../CatCard/CatCard";
import styles from "./favouritecats.module.scss";

interface IFavouriteCatsProps {
  cats: IFetchedCat[];
  addCat: (cat: IFetchedCat) => void;
  deleteCat: (cat: IFetchedCat) => void;
}

export default function FavouriteCats(props: IFavouriteCatsProps) {
  return (
    <div className={styles.container}>
      {props.cats.map((cat) => (
        <CatCard
          cat={cat}
          addCat={props.addCat}
          deleteCat={props.deleteCat}
          favourite={true}
        />
      ))}
    </div>
  );
}
