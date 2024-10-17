import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <ul><Link href="">Our work</Link></ul>
          <ul><Link href="">About</Link></ul>
          <ul><Link href="">Services</Link></ul>
          <ul><Link href="">Contact</Link></ul>
        </div>
        <div className={styles.socials}>
          <ul className={styles.soc}>
            <li><Link href="/">Terms & Conditions</Link></li>
            <li><Link href="/">© 2024 Fordstreet Studios. All rights reserved. </Link></li>
          </ul>
          <div>
            <Link href="">Instagram </Link>
            <Link href="">Snapchat</Link>
            <Link href=""></Link>
          </div>
        </div>
      </div>
        
      
    </div>
  )
};

export default Footer;