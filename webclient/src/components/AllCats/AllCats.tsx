import React from "react";
import styles from "./allcats.module.scss";
import { useState, useEffect } from "react";
import CatCard from "./CatCard/CatCard";
import axios from "axios";
import LoadingSpinner from "../ui/LoadingSpinner/LoadingSpinner";

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
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
  }, []);

  const fetchData = async () => {
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?size=thumb&order=ASC&limit=15&page=${page}`,
        {
          headers: {
            "x-api-key": "47141282-7d4d-472e-a590-bf90ac3c1e76",
            limit: 15,
            size: "thumb",
          },
        }
      )
      .then((data) => {
        setCats([...cats, ...data.data]);
        setIsLoaded(true);
        setPage(page + 1);
      });
  };

  const fetchMoreData = () => {
    fetchData();
    setIsFetching(false);
  };

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
    console.log(isFetching);
  };

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreData();
  }, [isFetching]);

  if (!isLoaded) {
    return <LoadingSpinner />;
  } else {
    console.log(cats);
    return (
      <>
        <div className={styles.container}>
          {cats.map((cat, index: number) => (
            <CatCard
              key={index}
              cat={cat}
              addCat={props.addCat}
              deleteCat={props.deleteCat}
              favourite={false}
            />
          ))}
        </div>
        {isFetching && <p>...загружаем еще котиков...</p>}
      </>
    );
  }
}
