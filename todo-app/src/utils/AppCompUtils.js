import axios from 'axios'

const getAllPosts = async() =>
{
    let resp=await axios.get("https://jsonplaceholder.typicode.com/posts");
    return resp.data;
}
const getAllUsers=async () =>
{
  let resp = await axios.get("https://jsonplaceholder.typicode.com/users");
  return resp.data;
}
const getAllTodos=async () =>
{
  let resp = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return resp.data;
}
export default  {getAllPosts,getAllUsers,getAllTodos}