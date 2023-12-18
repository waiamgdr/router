
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      
      <Router>
        <Navbar/>
        <Routes>
         
          <Route  path='/' element={<Home/>}>
            <Route path='about' element={About}/>
            <Route path='contact' element={Contact}/>
          </Route>
          <Route path="/about" element={<About/>}/>
          <Route path="contact"  element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
