import { useNavigate } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="info">
          <ul>
            <li>
              <a href="" onClick={() => navigate("/")}>
                Home
              </a>
            </li>
            <li>
              <a href="" onClick={() => navigate("/about")}>
                About
              </a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Resume</a>
            </li>
            <li>
              <a href="">Experience</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
