import Link from 'next/link';
import React from 'react';
import styles from '@/app/styles/navbar.module.css'
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
    return <nav className={styles.main}>
        <Link href="/" className={styles.link}>Uday Store</Link>
        <div>
        <Link href="/cart" className={styles.link}>
            <IoMdCart />Cart
            <span> ({0})</span>
        </Link>
        </div>
      
    </nav>;
}

export default Navbar;