import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image
          src="/images/facebook.svg"
          alt="Facebook"
          width={24}
          height={24}
        />
      </div>
      <div className={styles.logo}></div>
      <div className={styles.links}></div>
    </div>
  );
};

export default Navbar;
