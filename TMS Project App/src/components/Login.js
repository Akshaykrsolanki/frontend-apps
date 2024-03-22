import { useState } from "react";
import "./LoginStyles.css"
// import axios from "axios"

function Login () {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handleClick = async (e) =>{
        e.preventDefault()
        console.log(email);
        console.log(password);

        // for API Calling
        // const response = await axios.post("http://localhost:8080/register", {
        //     email : email,
        //     password : password
        // })
        // console.log(response.data);
    }

    return(<>
        <div className="login-signup">
            <h1>Welcome !</h1>
            <form>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleClick}>Log in</button>
                {/* <input type="submit" value="Log in"></input> */}
            </form>
        </div>
    </>
    )
}

export default Login;