'use client'; 

import Link from "next/link";
import styles from "./navbar.module.css";
import React from "react";
import { useState, useEffect } from 'react';




const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    // Change 100 to the scroll threshold you need
    if (window.scrollY > 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className={isFixed ? styles.fixed : ''}>
      <div className={styles.button}>
        <div className={styles.wrapper}>
          <span></span>
     
          <span className={styles.menu}>Menu</span>  

          {/* <div>
            <Link href="/work.jsx">Our Work</Link>
            <Link href="/about.jsx">About</Link>
            <Link href="/servicesPage.jsx">Services</Link>
            <Link href="/contact.jsx">Contact</Link>
          </div> */}
        </div>  
      </div>
    </div>
  )
};

export default Navbar;