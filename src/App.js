import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import RouteAsObj from "./components/RouteAsObjet";
import Search from "./components/Search.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" activeclassname="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" activeclassname="active">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about" activeclassname="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/routeAsObj" activeclassname="active">
              Route as Object
            </Link>
          </li>
          <li>
            <Link to="/search" activeclassname="active">
              Search
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="dashboard/*" element={<Dashboard />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="routeAsObj/*" element={<RouteAsObj />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
