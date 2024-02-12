import styles from '@/app/styles/banner.module.css'
import Link from 'next/link';
import ProductCard from './Components.js/ProductCard';

export default function Home() {
  return (
    <>
    <div className={styles.banner}>
      <p className={styles.text}>India Most Leading Cloth Market !</p> 
    </div>
    <div className={styles.list}>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
    </div>
<Link href="/" className={styles.view}>View All {">"}</Link>
    </>
  );
}
