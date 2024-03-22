import "./App.css";
import React from "react";
import Signup from "./Components/Signup";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Login from "./Components/Login";
import Todo from "./Components/Todo";

function App() {
  return (
    
        <Router>
          <Routes>
            <Route exact path='/' element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/todo' element={<Todo/>}/>
          </Routes>
        </Router>
    
  );
}

export default App;

