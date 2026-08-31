import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";

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
    }, 3000);

    return () => clearTimeout(timer);
  }, [productFromDetails]);

  return (
    <>
      <Navbar />

      <Routes>
        {/* الصفحة الرئيسية */}
        <Route
          path="/"
          element={<Navigate to="/products" replace />}
        />

        {/* صفحة المنتجات */}
        <Route
          path="/products"
          element={
            <Products
              productFromDetails={productFromDetails}
            />
          }
        />

        {/* صفحة تفاصيل المنتج */}
        <Route
          path="/products/:id"
          element={
            <ProductDetails
              onSendProduct={handleProductFromDetails}
            />
          }
        />

        {/* صفحة السلة */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* أي رابط غير موجود */}
        <Route
          path="*"
          element={<Navigate to="/products" replace />}
        />
      </Routes>
    </>
  );
}

export default App;