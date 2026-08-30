import {
  Link,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

import styles from "./ProductDetails.module.css";

function ProductDetails({ onSendProduct }) {
  const navigate = useNavigate();

  // نأخذ id من URL
  const { id } = useParams();

  // نأخذ Full Product Data
  const location = useLocation();

  const selectedProduct = location.state?.product;

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

  const handleSendToParent = () => {
    // Child → Parent
    onSendProduct(selectedProduct);

    // العودة إلى صفحة المنتجات
    navigate("/products");
  };

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

          <p>Product ID: {id}</p>

          <button
            className={styles.addButton}
            onClick={handleSendToParent}
          >
            Send Product to Parent
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;