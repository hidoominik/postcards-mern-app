import React from 'react'
import { Container, Grow, Grid, Paper, AppBar, TextField, Button} from '@material-ui/core';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import useStyles from './styles';
import {useNavigate, useLocation} from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import { getPosts, getPostsBySearch } from '../../actions/posts';

import Pagination from '../Pagination'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Home = () => {

    const [currentId, setCurrentId] = useState(null); //id of current post used for updating post
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1; //if there is no page use 1
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);


    
    const handleKeyPress = (e) => {
        if(e.keyCode === 13){ //enter key pressed
            //search post logic
            searchPost();
        }
    }

    const handleAdd = (tag) => {
        setTags([...tags, tag]);
    }

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag)=> tag !== tagToDelete));

    const searchPost = () => {
        if(search.trim() || tags){
            dispatch(getPostsBySearch({search, tags: tags.join(',')}));
            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
         } else {
            navigate('/');
         }

    }

  return (
    <Grow in>
    <Container maxWidth="xl">
        <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={9}>
                <Posts setCurrentId = {setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <AppBar className={classes.appBarSearch} position="static" color="inherit">
                    <TextField name="search" variant="outlined" label="Search Postcard" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} onKeyPress={handleKeyPress}/>
                    <ChipInput 
                        style={{margin: '10px 0'}}
                        value={tags}
                        onAdd={handleAdd}
                        onDelete={handleDelete}
                        label="Search Tags"
                        variant="outlined"

                    />
                    <Button onClick={searchPost} className={classes.searchButton} color="primary" variant='contained'> Search post</Button>
                </AppBar>
                <Form currentId = {currentId} setCurrentId = {setCurrentId} />
                <Paper elevation={6} className={classes.pagination} >
                    <Pagination page={page} />
                </Paper>
            </Grid>
            
        </Grid>
    </Container>
</Grow>
  )
}

export default Home