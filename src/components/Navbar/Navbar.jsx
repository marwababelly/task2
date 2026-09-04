import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Navbar.module.css";

function Navbar() {
  const cart = useSelector((state) => state.cart.cart);

  const cartItemsCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className={styles.navbar}>
      <Link
        to="/products"
        className={styles.logo}
      >
        Product Store
      </Link>

      <div className={styles.links}>
        <Link
          to="/products"
          className={styles.link}
        >
          Products
        </Link>

        <Link
          to="/cart"
          className={styles.cartLink}
        >
          Cart

          <span className={styles.cartCount}>
            {cartItemsCount}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;