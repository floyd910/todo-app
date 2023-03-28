import TodoItem from "../todoItem/TodoItem";
import TodoCounter from "../todoCounter/TodoCounter";
import "./TodoList.css";

export default function TodoList({
  todos,
  updateTodo,
  deleteTodo,
  filteredTodos,
  clearCompleted,
  filterByCategory,
  category
}) {
  return (
    <div className="ul">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.title}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          todo={todo}
        />
      ))}
      <TodoCounter
        category={category}
        filterByCategory={filterByCategory}
        todos={todos}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}
