import Link from "next/link";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      
        <video autoPlay muted loop className={styles.featured}>
          <source src="/Unc.mp4" type="video/mp4" />
        </video>

        <div className={styles.logo}>
          <Image src="/logo1.png" width={70} height={70} alt="logo" />  
        </div>
    
        
    </div>
  )
};

export default Featured;