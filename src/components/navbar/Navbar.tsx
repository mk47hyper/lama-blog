import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
        <Image src="/instagram.svg" alt="facebook" width={24} height={24} />
        <Image src="/tiktok.svg" alt="facebook" width={24} height={24} />
        <Image src="/youtube.svg" alt="facebook" width={24} height={24} />
      </div>
      <div className={styles.logo}>lamablog</div>
      <div className={styles.links}>
        <Link href="/">Homepage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
