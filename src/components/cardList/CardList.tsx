import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";

type Props = {};

const CardList = (props: Props) => {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
};

export default CardList;
