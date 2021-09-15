const checkIfCompleted= (todos) =>
{
let resp= todos.map(value=>value.completed);
return (resp.find(x=>x===false)===false);
}
export default  {checkIfCompleted}