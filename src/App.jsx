import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  const [productFromDetails, setProductFromDetails] =
    useState(null);

  const handleProductFromDetails = (product) => {
    setProductFromDetails(product);
  };

  useEffect(() => {
    if (!productFromDetails) return;

    const timer = setTimeout(() => {
      setProductFromDetails(null);
    }, 3000); // تختفي بعد 3 ثوانٍ

    return () => clearTimeout(timer);
  }, [productFromDetails]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/products" />}
      />

      <Route
        path="/products"
        element={
          <Products
            productFromDetails={productFromDetails}
          />
        }
      />

      <Route
        path="/products/:id"
        element={
          <ProductDetails
            onSendProduct={handleProductFromDetails}
          />
        }
      />
    </Routes>
  );
}

export default App;