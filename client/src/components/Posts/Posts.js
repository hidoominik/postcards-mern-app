import React from "react";
import {Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux'; //getting data

import Post from "./Post/Post";
import useStyles from "./styles";
const Posts = ({ setCurrentId }) => {
    const {posts, isLoading} = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts)

    if(!posts.length && !isLoading) return 'No posts';
    return(
       isLoading ? <CircularProgress /> : ( // loading if post length = 0
        <Grid className={classes.container} container alignItems="stretch" spacing="3">
            {posts.map((post) => (
                <Grid key={post.id} item xs={12} sm={12} md={6} xl={3}>
                    <Post post={post} setCurrentId={ setCurrentId }></Post>

                </Grid>
            ))}
            
        </Grid>
       )
    )
}

export default Posts;