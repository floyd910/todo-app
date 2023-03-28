import moon from "../../images/icon-moon.svg";
import sun from "../../images/icon-sun.svg";
import "./Header.css";
export default function Header({ changeTheme, darkMode }) {
  return (
    <header>
      <nav>
        <h1>TODO</h1>
        <button onClick={() => changeTheme()}>
          {darkMode ? (
            <img src={sun} alt="Sun icon" />
          ) : (
            <img src={moon} alt="Moon icon" />
          )}
        </button>
      </nav>
    </header>
  );
}
