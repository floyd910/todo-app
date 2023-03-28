import "./Categories.css";
export default function Categories({ filterByCategory, category }) {
  return (
    <div className="categories">
      <button
        className={category === "All" ? "chosen" : ""}
        onClick={() => filterByCategory("All")}
      >
        All
      </button>
      <button
        className={category === "Active" ? "chosen" : ""}
        onClick={() => filterByCategory("Active")}
      >
        Active
      </button>
      <button
        className={category === "Completed" ? "chosen" : ""}
        onClick={() => filterByCategory("Completed")}
      >
        Completed
      </button>
    </div>
  );
}
