import { Link } from "react-router-dom";

import { useCart } from "../../Context/CartContext";

import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.card}>
      <Link
        to={`/products/${product.id}`}
        state={{ product }}
        className={styles.imageContainer}
      >
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
        />
      </Link>

      <div className={styles.content}>
        <span className={styles.category}>
          {product.category}
        </span>

        <h2 className={styles.name}>
          {product.name}
        </h2>

        <p className={styles.price}>
          ${product.price}
        </p>

        <div className={styles.buttons}>
          <Link
            to={`/products/${product.id}`}
            state={{ product }}
            className={styles.button}
          >
            View Details
          </Link>

          <button
            onClick={handleAddToCart}
            className={styles.cartButton}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;