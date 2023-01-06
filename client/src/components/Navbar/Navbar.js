import React from 'react';
import {AppBar, Typography} from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import memories from '../../images/memories.svg';

const Navbar = () => {

    const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position = "static" color = "inherit">
    <div className={classes.brandContainer}>

    
        <Typography variant = "h2" align = "center">Postcards</Typography>
        <img className={classes.image} src = {memories} alt = "memories" height="60" />
    </div>    
    </AppBar>
  )
}

export default Navbar