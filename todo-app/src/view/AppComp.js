
import { Container, Grid } from '@material-ui/core';
import {useState,useEffect} from 'react'
import '../style/App.css';
import utils from '../utils/AppCompUtils';
import UsersComp from './UsersComp';

function AppComp() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(async () =>
  {
    let respPosts= await utils.getAllPosts();
    setPosts(respPosts);
    let respUsers = await utils.getAllUsers();
    setUsers(respUsers);
    let respTodos = await utils.getAllTodos();
    setTodos(respTodos);
  },[] )

  return (
    <Container>
      <Grid container spacing={3}>
  
          {
            users.map(value=>{
              return <Grid item key={value.id} xs={12} md={6} lg={4} >
                <UsersComp  userData={value} todosData={todos.filter(item=>item.userId===value.id)}/>
                </Grid>
            })
          }
    </Grid>
    </Container>
  );
}

export default AppComp;
