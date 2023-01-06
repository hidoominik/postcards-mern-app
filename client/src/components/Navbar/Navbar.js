import React from 'react';
import {AppBar, Typography, Button, Avatar, Toolbar} from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import memories from '../../images/memories.svg';

const Navbar = () => {

    const classes = useStyles();
    const user = null;
  return (
    <AppBar className={classes.appBar} position = "static" color = "inherit">
    <div className={classes.brandContainer}>

    
        <Typography variant = "h2" component={Link} to="/" align = "center">Postcards</Typography>
        <img className={classes.image} src = {memories} alt = "memories" height="60" />
    </div>    
    <Toolbar className={classes.toolbar}></Toolbar>
        {user ? (
            <div>
                <Avatar className={classes.purple}  alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                <Button variant="contained" component={Link} to="/auth" className={classes.logout} color="secondary">Logout</Button>
            </div>
        ):(
            <Button variant="contained" component={Link} to="/auth" className={classes.login} color="primary">Login</Button>
        )}
    </AppBar>
  )
}

export default Navbar