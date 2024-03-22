import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import User from "./routes/User";
import Know from "./routes/Know";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<User/>}/>
        <Route path="/know" element={<Know/>}/>
      </Routes>
      
    
    </div>
  );
}

