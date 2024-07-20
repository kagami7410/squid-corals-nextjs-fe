import React from 'react'
import AddToCart from '../AddToCart/AddToCart'
import styles from './ProductCart.module.css'

const ProductCard = () => {
  return (
    <div className={styles.cardContainer}>
        <AddToCart />
      
    </div>
  )
}

export default ProductCard