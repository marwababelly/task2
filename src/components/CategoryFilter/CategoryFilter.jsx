import styles from "./CategoryFilter.module.css";

function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className={styles.filters}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.button} ${
            selectedCategory === category
              ? styles.active
              : ""
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;