import { useState } from "react";
import axios from "axios";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const loginUser = async () => {

try{

const res = await axios.post(
"http://localhost:5000/api/auth/login",
{email,password}
);

localStorage.setItem("token",res.data.token);

window.location.href="/dashboard";

}catch(err){
alert("Login failed");
}

};

return(

<div className="container">

<h2>Login</h2>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={loginUser}>Login</button>

<p>
No account? <a href="/signup">Signup</a>
</p>

</div>

);

}

export default Login;