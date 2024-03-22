import React, { useState } from "react"
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

function Signup() {
    const navigateTo = useNavigate();

    // const [username,setUsername] = useState("");
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");

  
    const [formdata, setFormdata]=useState({
      username: "",
      email: "",
      password: "",
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormdata({ ...formdata, [name]: value });
    };
    
    async function save() {
      axios.post("http://localhost:8085/signup",formdata)
      .then((response)=>{
        console.log(response);
      })
      navigateTo("/login");
    }
    
      return (
        <div className="container1">
          <div className="header">
            <div className="text">Register</div>
            <div className="underline"></div>
          </div>
    
          <form>
            <div className="inputs">
              <div className="input">
                <input type="text" placeholder="Username" name="username" onChange={handleChange} value={formdata.username}  required/>
              </div>
    
              <div className="input">
                <input type="email" placeholder="Email Id" name="email" value={formdata.email} onChange={handleChange}  required/>
              </div>
    
              <div className="input">
                <input type="password" placeholder="Password" name="password" value={formdata.password} onChange={handleChange} required/>
              </div>

              <ReCAPTCHA
              sitekey="6LdZpd4oAAAAADCu8RyW28pPIoRwRTNWqqNknETj"
              type="image"
              />


            </div>
            <div className="signup-s">
              <button onClick={()=>save()} type="submit">Sign Up</button>
            </div>
            <br></br>
            <a href="http://localhost:8080/login/oauth2/code/google"  style={{marginLeft:"5rem" , fontSize:"1rem"}}>
              {"Login with Google "}
            </a>
          </form>
        </div>
      );
    };
  

export default Signup;









// import React, { useState } from "react";
// import "./RegistrationStyles.css";
// import { useNavigate } from "react-router-dom";

// const Registration = () => {
//   // Initialize the useNavigate hook
//   const navigate = useNavigate();

//   // State to store input values and error messages
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   // Function to handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: "" }); // Clear any previous error message
//   };

//   // Function to validate the format of email
//   const isEmailValid = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   // Function to validate the format of password
//   const isPasswordValid = (password) => {
//     return password.length >= 6; // Example: Password should be at least 6 characters long
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate the username, email, and password format
//     const { username, email, password } = formData;
//     const newErrors = {};

//     if (username.trim() === "") {
//       newErrors.username = "Username is required.";
//     }

//     if (!isEmailValid(email)) {
//       newErrors.email = "Invalid email format.";
//     }

//     if (!isPasswordValid(password)) {
//       newErrors.password = "Password should be at least 6 characters long.";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       // If there are errors, set them in the state
//       setErrors(newErrors);
//     } else {
//       // If no errors, proceed to navigate to the new page
//       navigate('/scan');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <div className="text">Register</div>
//         <div className="underline"></div>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div className="inputs">
//           <div className="input">
//             <input
//               type="text"
//               placeholder="Username"
//               name="username"
//               value={formData.username}
//               onChange={handleInputChange}
//             />
//             {errors.username && <div className="error">{errors.username}</div>}
//           </div>

//           <div className="input">
//             <input
//               type="email"
//               placeholder="Email Id"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//             {errors.email && <div className="error">{errors.email}</div>}
//           </div>

//           <div className="input">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//             />
//             {errors.password && <div className="error">{errors.password}</div>}
//           </div>
//         </div>
//         <div>
//           <button type="submit">Sign Up</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Registration;





















// import React, { useState } from "react";
// import "./SignupStyles.css";
// import { useNavigate } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";
// import axios from "axios";

// function Signup() {
//   const navigateTo = useNavigate();

//   const [formdata, setFormdata] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormdata({ ...formdata, [name]: value });
//   };

//   async function save() {
//     try {
//       const response = await axios.post("http://localhost:8085/signup", formdata);
//       console.log(response);
//       navigateTo("/login");
//     } catch (error) {
//       console.error("Error during signup:", error);
//       // Handle error (e.g., show an error message to the user)
//     }
//   }

//   return (
//     <div className="container1">
//       <div className="header">
//         <div className="text">Register</div>
//         <div className="underline"></div>
//       </div>

//       <form>
//         <div className="inputs">
//           <div className="input">
//             <input
//               type="text"
//               placeholder="Username"
//               name="username"
//               onChange={handleChange}
//               value={formdata.username}
//               required
//             />
//           </div>

//           <div className="input">
//             <input
//               type="email"
//               placeholder="Email Id"
//               name="email"
//               value={formdata.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="input">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={formdata.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <ReCAPTCHA sitekey="6LdZpd4oAAAAADCu8RyW28pPIoRwRTNWqqNknETj" type="image" />
//         </div>
//         <div className="signup-s">
//           <button onClick={() => save()} type="button">
//             Sign Up
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Signup;
