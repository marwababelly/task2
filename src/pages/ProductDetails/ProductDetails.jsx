import { Link, useParams } from "react-router-dom";
import products from "../../data/Products";
import styles from "./ProductDetails.module.css";

function ProductDetails() {
  const { id } = useParams();

  const selectedProduct = products.find(
    (product) => product.id === Number(id)
  );

  if (!selectedProduct) {
    return (
      <div className={styles.notFound}>
        <h2>Product Not Found</h2>

        <Link
          to="/products"
          className={styles.backButton}
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link
        to="/products"
        className={styles.backLink}
      >
        ← Back to Products
      </Link>

      <div className={styles.productDetails}>
        <div className={styles.imageContainer}>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
          />
        </div>

        <div className={styles.content}>
          <span className={styles.category}>
            {selectedProduct.category}
          </span>

          <h1>{selectedProduct.name}</h1>

          <p className={styles.price}>
            ${selectedProduct.price}
          </p>

          <p className={styles.description}>
            {selectedProduct.description}
          </p>

          <button className={styles.addButton}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;