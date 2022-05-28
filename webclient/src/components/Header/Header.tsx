import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

interface IHeaderProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
}

export default function Header(props: IHeaderProps) {
  return (
    <nav>
      <ul className={styles.header}>
        <li className={props.activeTab === 0 ? styles.selected : ""}>
          <Link
            to={"/"}
            onClick={() => {
              props.setActiveTab(0);
            }}
          >
            Все котики
          </Link>
        </li>
        <li className={props.activeTab === 1 ? styles.selected : ""}>
          <Link
            to={"/favourite"}
            onClick={() => {
              props.setActiveTab(1);
            }}
          >
            Любимые котики
          </Link>
        </li>
      </ul>
    </nav>
  );
}
