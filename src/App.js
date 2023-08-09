import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<Navbar />} /> 
            <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
