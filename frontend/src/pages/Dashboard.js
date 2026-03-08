import {useState,useEffect} from "react";
import axios from "axios";
import AddExpense from "../components/AddExpense";
import ExpenseList from "../components/ExpenseList";

function Dashboard(){

const [expenses,setExpenses] = useState([]);

const fetchExpenses = async () => {

const token = localStorage.getItem("token");

const res = await axios.get(
"http://localhost:5000/api/expenses",
{
headers:{Authorization:token}
}
);

setExpenses(res.data);

};

useEffect(()=>{
fetchExpenses();
},[]);

const total = expenses.reduce(
(sum,e)=> sum + Number(e.amount),
0
);

return(

<div className="container">

<h2>Dashboard</h2>

<h3>Total Expense: ₹{total}</h3>

<AddExpense fetchExpenses={fetchExpenses}/>

<ExpenseList
expenses={expenses}
fetchExpenses={fetchExpenses}
/>

</div>

);

}

export default Dashboard;