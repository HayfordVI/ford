import Link from "next/link";
import styles from "./homepage.module.css";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Featured from "@/components/featured/Featured";
import Services from "@/components/services/Services";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <Navbar />
      <Services />
     
      <Footer />
   
    </div>
  );
}