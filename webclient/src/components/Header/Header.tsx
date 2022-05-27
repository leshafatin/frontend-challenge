import React from "react";
import styles from "./header.module.scss";

interface IHeaderProps {
  activeTab: number;
}

export default function Header(props: IHeaderProps) {
  return (
    <nav>
      <ul className={styles.header}>
        <li>Все котики</li>
        <li>Любимые котики</li>
      </ul>
    </nav>
  );
}
