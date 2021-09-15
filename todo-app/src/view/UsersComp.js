import {useState,useEffect} from 'react'
import '../style/Users.css';
import utils from '../utils/UsersCompUtils';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';


const useStyles = makeStyles({
  red: {
    maxWidth: 345,
    border:"3px solid red"
  },
  green: {
    maxWidth: 345,
    border:"3px solid green"
  },
  media: {
  
  },
});


function UsersComp(props) {

    const classes = useStyles();
    const [userData, setUserData] = useState({});
    const [todosData, setTodosData] = useState([]);
    const [color, setColor] = useState(false);
    

    useEffect(async () =>
    {

        setUserData(props.userData);
        setTodosData(props.todosData);
        let isNotCompleted= utils.checkIfCompleted(props.todosData);
        setColor(isNotCompleted);
    },[props] )
  
    return (
<div >
        <Card className={color?classes.red:classes.green} elevation={10}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              
                  ID:<Input type="text" value={userData.id} disabled="true"/><br/><br/>
                  Name :<Input type="text" value={userData.name} onChange={e => setUserData({...userData, name : e.target.value})}/><br/>
                  Email : <Input type="text" value={userData.email} onChange={e => setUserData({...userData, email : e.target.value})}/><br/>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained"  color="primary">
              Other Data
            </Button>
            <Button size="small"  variant="contained" color="primary">
              Update
            </Button>
            <Button size="small"   variant="contained" color="secondary">
              Delete
            </Button>
        
          </CardActions>
        </Card>
    
         </div>
    
    );
  }
  
  export default UsersComp;