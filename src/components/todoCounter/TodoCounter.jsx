import Categories from "../categories/Categories";
import "./TodoCounter.css";
export default function TodoCounter({
  todos,
  clearCompleted,
  category,
  filterByCategory
}) {
  let active = todos.filter((todo) => !todo.checked);
  return (
    <>
      <div className="todo-counter">
        {active.length === 1 ? (
          <p>1 item left </p>
        ) : (
          <p>{active.length} items left</p>
        )}
        <button onClick={() => clearCompleted()}>Clear Completed</button>
      </div>
      <div className="todo-counter todo-counter-desktop">
        {active.length === 1 ? (
          <p>1 item left </p>
        ) : (
          <p>{active.length} items left</p>
        )}
        <Categories filterByCategory={filterByCategory} category={category} />
        <button onClick={() => clearCompleted()}>Clear Completed</button>
      </div>
    </>
  );
}
