import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <Link
        to={`/products/${product.id}`}
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

        <Link
          to={`/products/${product.id}`}
          className={styles.button}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;