import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Nav';
import Background from './Components/Background/Background';
import Story from './Components/Story/Story';
import About from './Components/About/About';



function App() {
  return (
    <div className="App">       
      <Router>
      <Navbar />
        <Routes>          
          <Route path="/" element={<><Background /><Story/></>} />
          <Route path="/about" element={<About />} />   
          <Route path="*" element={<h1>Page Not Found</h1>} />       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
