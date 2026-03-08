import { useState } from "react";
import axios from "axios";

function Signup(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const signupUser = async () => {

try{

await axios.post(
"http://localhost:5000/api/auth/signup",
{email,password}
);

alert("Signup successful");

window.location.href="/";

}catch(err){

alert("Signup error");

}

};

return(

<div className="container">

<h2>Signup</h2>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={signupUser}>Signup</button>

</div>

);

}

export default Signup;