import React from 'react';
import Image from 'next/image';
import styles from "@/app/styles/productCard.module.css"
import Link from 'next/link';
const ProductCard = () => {
    return(
        <div className={styles.card}>
      <div >
        <Image
          src={"/images/1.png"}
          alt={'alt'}
          width={269.8}
          height={200}
        />
      </div>
      <div className={styles.cardDetails} >
         <div className={styles.description}>
            <h1>Coding shirt 1</h1>
            <p>this is description ...</p>
         </div>
         <div className={styles.tag}>
          <h1>2000</h1>
         </div>
         
      </div>
      
    </div>
    );
}



export default ProductCard;