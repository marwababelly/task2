import { Link } from "react-router-dom";

import { useCart } from "../../Context/CartContext";

import styles from "./Cart.module.css";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className={styles.empty}>
        <h1>Your Cart is Empty</h1>

        <p>
          Add some products to your cart first.
        </p>

        <Link
          to="/products"
          className={styles.backButton}
        >
          Go to Products
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Shopping Cart</h1>

      <div className={styles.cartItems}>
        {cart.map((item) => (
          <div
            key={item.id}
            className={styles.cartItem}
          >
            <img
              src={item.image}
              alt={item.name}
              className={styles.image}
            />

            <div className={styles.info}>
              <h2>{item.name}</h2>

              <p>
                ${item.price}
              </p>
            </div>

            <div className={styles.quantity}>
              <button
                onClick={() =>
                  decreaseQuantity(item.id)
                }
              >
                -
              </button>

              <span>
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  increaseQuantity(item.id)
                }
              >
                +
              </button>
            </div>

            <div className={styles.itemTotal}>
              $
              {(
                item.price * item.quantity
              ).toFixed(2)}
            </div>

            <button
              onClick={() =>
                removeFromCart(item.id)
              }
              className={styles.removeButton}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className={styles.total}>
        <h2>
          Total: ${totalPrice.toFixed(2)}
        </h2>
      </div>
    </div>
  );
}

export default Cart;