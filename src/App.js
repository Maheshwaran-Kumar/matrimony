import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Navbar/Nav.jsx';
import Background from './Components/Background/Background.jsx';
import Story from './Components/Story/Story.jsx';
import About from './Components/About/About.jsx';
import GroomPage from './Components/groom/groom';


function App() {
  return (
    <div className="App">       
      <Router>
      <Nav />
        <Routes>          
          <Route path="/" element={<><Background /><Story/></>} />
          <Route path="/about" element={<About />} />   
          <Route path="*" element={<h1>Page Not Found</h1>} />    
          <Route path="/groom" element={<><GroomPage/></>} />   
        </Routes>
      </Router>
    </div>
  );
}

export default App;
