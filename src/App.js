import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./Components/background/background.jsx";
import Story from "./Components/story/story.jsx";
import About from "./Components/about/about.jsx";
import GroomPage from "./Components/groom/groom.jsx";
import BridePage from "./Components/bride/bride.jsx";
import Footer from "./Components/footer/footer.jsx";
import Nav from "./Components/navbar/nav.jsx";
import Contact from "./Components/contact/contact.jsx";
import Wishlist from "./Components/wishlist/wishlist.jsx";
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
          <Route path="/story" element={<Story />} />
          <Route
            path="/about"
            element={
              <>
                <About />
                <Story />
              </>
            }
          />
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
            path="/wishlist"
            element={
              <>
                <Wishlist />
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
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
