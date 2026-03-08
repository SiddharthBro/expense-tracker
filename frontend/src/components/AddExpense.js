import {useState} from "react";
import axios from "axios";

function AddExpense({fetchExpenses}){

const [title,setTitle] = useState("");
const [amount,setAmount] = useState("");
const [category,setCategory] = useState("Food");

const addExpense = async () => {

const token = localStorage.getItem("token");

await axios.post(
"http://localhost:5000/api/expenses",
{title,amount,category},
{
headers:{Authorization:token}
}
);

fetchExpenses();

};

return(

<div>

<h3>Add Expense</h3>

<input
placeholder="Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<input
placeholder="Amount"
onChange={(e)=>setAmount(e.target.value)}
/>

<select
onChange={(e)=>setCategory(e.target.value)}
>

<option>Food</option>
<option>Travel</option>
<option>Bills</option>
<option>Other</option>

</select>

<button onClick={addExpense}>
Add Expense
</button>

</div>

);

}

export default AddExpense;