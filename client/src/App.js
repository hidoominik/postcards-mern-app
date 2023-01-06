import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'


import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    const [currentId, setCurrentId] = useState(null); //id of current post used for updating post
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);
    
    return(
        <Container maxWidth="lg">
           <Navbar/>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
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