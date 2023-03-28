import { useState, useRef } from "react";
import CheckBox from "../checkBox/CheckBox";
import "./TodoInput.css";
export default function TodoInput({
  todos,
  createTodo,
  validationError,
  clearError
}) {
  const todoRef = useRef();
  const [newTodo, setNewTodo] = useState({ title: "", checked: false });
  const defineChecked = (bool) => {
    setNewTodo({ ...newTodo, checked: bool });
  };
  const defineTitle = () => {
    clearError();
    setNewTodo({ ...newTodo, title: todoRef.current.value });
  };

  return (
    <>
      <div className="create-todo-container">
        {validationError && (
          <p className="error-message">Todo with this title already exists</p>
        )}
        <div className="create-box">
          <CheckBox defineChecked={defineChecked} parent="input" />
          <input
            className="create-todo"
            type="text"
            placeholder="Create a new todo…"
            ref={todoRef}
            onChange={() => defineTitle()}
            onKeyDown={(e) => e.keyCode === 13 && createTodo(newTodo)}
          />
        </div>
      </div>
    </>
  );
}
