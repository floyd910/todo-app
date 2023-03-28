import cross from "../../images/icon-cross.svg";
import CheckBox from "../checkBox/CheckBox";
import "./TodoItem.css";

export default function TodoItem({ todo, updateTodo, deleteTodo }) {
  return (
    <li>
      <div className="left-part">
        <CheckBox updateTodo={updateTodo} parent="list" todo={todo} />
        <p className={todo.checked ? "completed" : ""}>{todo.title}</p>
      </div>

      <button onClick={() => deleteTodo(todo)}>
        <img alt="Cancel icon" src={cross} />
      </button>
    </li>
  );
}
