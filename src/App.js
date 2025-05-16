import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/navbar/nav";
import Background from "./Components/background/background";
import Story from "./Components/story/story";
import About from "./Components/about/about";
import GroomPage from "./Components/groom/groom";
import BridePage from "./Components/bride/bride";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Background />
                <Story />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route
            path="/groom"
            element={
              <>
                <GroomPage />
              </>
            }
          />
          <Route
            path="/bride"
            element={
              <>
                <BridePage />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
