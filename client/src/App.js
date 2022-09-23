import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'
import memories from './images/memories.svg';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
    const [currentId, setCurrentId] = useState(null); //id of current post used for updating post
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);
    
    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position = "static" color = "inherit">
                <Typography variant = "h2" align = "center">Postcards</Typography>
                <img className={classes.image} src = {memories} alt = "memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId = {setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId = {currentId} setCurrentId = {setCurrentId} />
                        </Grid>
                        
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;