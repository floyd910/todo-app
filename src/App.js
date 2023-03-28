import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import TodoInput from "./components/todoInput/TodoInput";
import TodoList from "./components/todoList/TodoList";
import Categories from "./components/categories/Categories";
import desktopDark from "./images/bg-desktop-dark.jpg";
import desktopLight from "./images/bg-desktop-light.jpg";
import mbDark from "./images/bg-mobile-dark.jpg";
import mbLight from "./images/bg-mobile-light.jpg";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([
    { title: "Coding", checked: true },
    { title: "Playing football", checked: false },
    { title: "Applying for jobs", checked: false }
  ]);
  const [category, setCategory] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  const [validationError, setValidationError] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    category === "All"
      ? setFilteredTodos(todos)
      : category === "Active"
      ? setFilteredTodos(todos.filter((todo) => !todo.checked))
      : setFilteredTodos(todos.filter((todo) => todo.checked));
  }, [category, todos]);

  const createTodo = (newTodo) => {
    let sameTodos = todos.filter(
      (todo) => todo.title.toLowerCase() === newTodo.title.toLowerCase()
    );
    sameTodos.length > 0
      ? setValidationError(true)
      : (setTodos([...todos, newTodo]), setValidationError(false));
  };

  const deleteTodo = (todo) => {
    setTodos([...todos].filter((obj) => obj.title !== todo.title));
  };

  const updateTodo = (todo) => {
    setTodos(
      [...todos].map((object) => {
        if (object.title === todo.title) {
          return {
            ...object,
            checked: !object.checked
          };
        } else return object;
      })
    );
  };

  const clearError = () => {
    setValidationError(false);
  };

  const filterByCategory = (chosen) => {
    setCategory(chosen);
  };

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.checked));
  };

  document.body.style.background = darkMode ? "#181c24" : "#f2f2f2";

  return (
    <div className="App">
      <div className={darkMode ? "dark" : "light"}>
        {darkMode ? (
          <img className="bg" src={mbDark} alt="Todo App Bitoid Challenge" />
        ) : (
          <img className="bg" src={mbLight} alt="Todo App Bitoid Challenge" />
        )}

        {darkMode ? (
          <img
            className="bg-desktop"
            src={desktopDark}
            alt="Todo App Bitoid Challenge"
          />
        ) : (
          <img
            className="bg-desktop"
            src={desktopLight}
            alt="Todo App Bitoid Challenge"
          />
        )}
        <div className="todo_wrapper">
          <div className="content">
            <Header changeTheme={changeTheme} darkMode={darkMode} />
            <TodoInput
              createTodo={createTodo}
              validationError={validationError}
              clearError={clearError}
              todos={todos}
            />
            <TodoList
              todos={todos}
              category={category}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              setTodos={setTodos}
              filteredTodos={filteredTodos}
              clearCompleted={clearCompleted}
              filterByCategory={filterByCategory}
            />
            <div className="categories-container">
              <Categories
                filterByCategory={filterByCategory}
                category={category}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
