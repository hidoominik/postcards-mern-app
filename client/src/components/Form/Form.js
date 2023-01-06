import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch , useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";


const Form = ({ currentId, setCurrentId }) => {
    
    const [postData, setPostData] = useState({
        title:'',
        message:'',
        tags:'',
        selectedFile:''
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post); //data of edited post
        console.log("Post to edit")
        console.log(post)
    },[currentId, post])


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Submit clicked!")
        if(currentId){
            console.log(currentId)
           dispatch(updatePost(currentId,{...postData, name: user?.result?.name})); 

        }else{
           
           dispatch(createPost({...postData, name: user?.result?.name}))
            .then(()=>{console.log("Post created!")}); 

        }
         clear();
        
    }
    const clear = () =>{
        setCurrentId(null);
        setPostData({ 
            title:'',
            message:'',
            tags:'',
            selectedFile:''
        })
    }

    if(!user?.result?.name){
        return(
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Sign In to add new postcard.
                </Typography>
            </Paper>
        )
    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId ? 'Edit' : 'Create'} a postcard</Typography>
                
                  <TextField
                    name = "title" 
                    variant = "outlined" 
                    label="Title"
                    inputProps={{
                        className: classes.multilineColor
                    }} 
                    fullWidth 
                    value={postData.title}
                    onChange={(event) => setPostData({...postData, title: event.target.value})}
                />
                  <TextField
                    className = {classes.textFieldStyle}
                    name = "message"
                    variant = "outlined"
                    style={{color: 'white'}} 
                    label="Message"
                    inputProps={{
                        className: classes.multilineColor
                    }} 
                    fullWidth 
                    value={postData.message}
                    onChange={(event) => setPostData({...postData, message: event.target.value})}
                />
                  <TextField
                    name = "tags"
                    style={{color: 'white'}}
                    variant = "outlined" 
                    label="Tags"
                    inputProps={{
                        className: classes.multilineColor
                    }} 
                    fullWidth 
                    value={postData.tags}
                    onChange={(event) => setPostData({...postData, tags: event.target.value.split(',')})}
                />
                <div className={classes.fileInput}>
                     <FileBase
                        type ='file'
                        multiple = {false}
                        onDone = {({base64}) => setPostData({ ...postData, selectedFile: base64})}
                     />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant = "contained"
                    color = "primary"
                    size = "large"
                    type = "submit"
                    fullWidth
                >
                        Submit
                </Button>
                
                <Button
                    variant = "contained"
                    color = "secondary"
                    size = "small"
                    onClick={clear}
                    fullWidth
                >
                        Clear
                </Button>
               
            </form>

        </Paper>
    )
}

export default Form;