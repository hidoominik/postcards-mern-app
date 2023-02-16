import { FETCH_ALL, FETCH_BY_SEARCH, CREATE, DELETE, UPDATE, LIKE } from '../constants/actionTypes';
import * as api from '../api';

//Action creators - functions returning actions

export const getPosts = (page) => async (dispatch) => { //fetching all the posts can take some time, so async function is required, 
    
    try {
        
        const { data } = await api.fetchPosts(page);
        console.log(data)
        dispatch({type: FETCH_ALL, payload: data}); 
    } catch (error) {
        console.log(error.message)   
    }  
}

export const getPostsBySearch = (searchQuery) => async(dispatch) => {
    try {
        const {data : { data } } = await api.fetchPostsBySearch(searchQuery);
        console.log(data);
        dispatch({type: FETCH_BY_SEARCH, payload: data}); 
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async(dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type: CREATE, payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
       
        const { data } = await api.updatePost(id,post); //response
        console.log("From actions update:")
        console.log(id)
        console.log(post)
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      
        console.log(error)
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {

        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id});

    } catch (error) {

        console.log(error)
        
    }
}

export const likePost = (id) => async(dispatch) => {
    try {
        const {data} = await api.likePost(id);
        dispatch({type: LIKE, payload: data});

    } catch (error) {
        console.log(error);
    }
}