import {
  Link,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useDispatch } from "react-redux";

import products from "../../data/Products";

import {
  addToCart,
} from "../../Redux/CartSlice";

import styles from "./ProductDetails.module.css";

function ProductDetails({ onSendProduct }) {
  const { id } = useParams();

  const location = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const selectedProduct =
    location.state?.product ||
    products.find(
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

  const handleSendToParent = () => {
    onSendProduct(selectedProduct);

    navigate("/products");
  };

  const handleAddToCart = () => {
    dispatch(addToCart(selectedProduct));
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

          <p>
            Product ID: {id}
          </p>

          <button
            onClick={handleAddToCart}
            className={styles.cartButton}
          >
            Add to Cart
          </button>

          <button
            onClick={handleSendToParent}
            className={styles.parentButton}
          >
            Send Product to Parent
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;