import React from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import useStyles from './styles';
import { getPosts } from '../../actions/posts';
const Home = () => {

    const [currentId, setCurrentId] = useState(null); //id of current post used for updating post
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);
    

  return (
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
  )
}

export default Home