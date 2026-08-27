import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/products" />}
      />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />
    </Routes>
  );
}

export default App;