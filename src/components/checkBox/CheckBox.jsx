import { useState, useEffect } from "react";
import "./CheckBox.css";
import check from "../../images/icon-check.svg";
export default function CheckBox({ updateTodo, parent, todo, defineChecked }) {
  const [checkMark, setCheckMark] = useState(false);

  useEffect(() => {
    parent === "input" && defineChecked(checkMark);
  }, [checkMark]);

  return (
    <>
      {parent === "list" ? (
        <button
          className={
            todo.checked ? "custom-checkbox checked" : "custom-checkbox"
          }
          onClick={() => {
            updateTodo(todo);
          }}
        >
          {todo.checked && <img src={check} alt="Checkmark icon" />}
        </button>
      ) : (
        <button
          className={checkMark ? "custom-checkbox checked" : "custom-checkbox"}
          onClick={() => {
            setCheckMark(!checkMark);
          }}
        >
          {checkMark && <img src={check} alt="Checkmark icon" />}
        </button>
      )}
    </>
  );
}
