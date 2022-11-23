import "./App.css";
import logo from "./assets/images/logo.svg";
import menu from "./assets/images/icon-menu.svg";
import cv from "./assets/images/image-web-3-mobile.jpg";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div>
          <img src={logo} className="logo" alt="news_homepage_logo" />
        </div>
        <div className="menu">
          <img src={menu} alt="news_homepage_menu" />
        </div>
      </div>
      <div>
        <img src={cv} className="cv" alt="news_homepage_cv" />
      </div>
      <h1>The Bright Future of Web 3.0</h1>
      <p>
        {" "}
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?{" "}
      </p>
    </div>
  );
}

export default App;
