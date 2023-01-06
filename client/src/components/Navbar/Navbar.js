import React from 'react';
import {AppBar, Typography, Button, Avatar, Toolbar} from '@material-ui/core';
import useStyles from './styles';

import memories from '../../images/memories.svg';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useState, useEffect } from 'react';
import decode from 'jwt-decode';

const Navbar = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();


    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    useEffect(()=>{
        const token = user?.token;
        if(token){
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout(); //check if token is expired
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const logout =()=>{
        dispatch({type: 'LOGOUT'});
        setUser(null);
        navigate("/auth");
    }

  return (
    <AppBar className={classes.appBar} position = "static" color = "inherit">
    <div className={classes.brandContainer}>

    
        <Typography className = {classes.heading} variant = "h2" component={Link} to="/" align = "center" underline="none">Postcards</Typography>
        <img className={classes.image} src = {memories} alt = "memories" height="60" />
    </div>    
    <Toolbar className={classes.toolbar}></Toolbar>
        {user ? (
            <div className={classes.profile}>
                <Avatar className={classes.purple}  alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                <Button variant="contained" onClick={logout} className={classes.logout} color="secondary">Logout</Button>
            </div>
        ):(
            <Button variant="contained" component={Link} to="/auth" className={classes.login} color="primary">Login</Button>
        )}
    </AppBar>
  )
}

export default Navbar