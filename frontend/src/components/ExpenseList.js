import axios from "axios";

function ExpenseList({expenses,fetchExpenses}){

const deleteExpense = async (id)=>{

const token = localStorage.getItem("token");

await axios.delete(
`http://localhost:5000/api/expenses/${id}`,
{
headers:{Authorization:token}
}
);

fetchExpenses();

};

return(

<div>

<h3>Expenses</h3>

{expenses.map((e)=>(

<div className="expense-item" key={e._id}>

<span>
{e.title} - ₹{e.amount} ({e.category})
</span>

<button
onClick={()=>deleteExpense(e._id)}
>
Delete
</button>

</div>

))}

</div>

);

}

export default ExpenseList;