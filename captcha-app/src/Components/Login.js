import React from "react"
import "./LoginStyles.css";
import { useNavigate } from "react-router-dom";


function Login() {
  // const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/todo');
      };


    // const handleSubmit = (e) => {}


  return (
            <div className="container2">
              <div className="header">
                <div className="text">Log in</div>
                <div className="underline"></div>
              </div>
        
              <form onSubmit={handleSubmit}>
                <div className="inputs">
                  {/* <div className="input"> */}
                    {/* <input type="text" placeholder="Username" /> */}
                  {/* </div> */}
        
                  <div className="input">
                    <input type="email" placeholder="Email Id" />
                  </div>
        
                  <div className="input">
                    <input type="password" placeholder="Password" />
                  </div>
                </div>
                <div className="login-l">
                  <button type="submit">Log in</button>
                </div>
              </form>
            </div>
          );
        };
    
    export default Login;


    
