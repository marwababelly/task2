import { useState } from "react";

import products from "../../data/Products";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

import styles from "./Products.module.css";

function Products({ productFromDetails }) {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Our Products</h1>

        <p>
          Browse our collection and find the product you need.
        </p>
      </div>

      {/* الرسالة القادمة من App */}
      {productFromDetails && (
        <div className={styles.message}>
          You selected {productFromDetails.name} from the product details page!
        </div>
      )}

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;