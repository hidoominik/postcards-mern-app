import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch , useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";


const Form = ({ currentId, setCurrentId }) => {
    
    const [postData, setPostData] = useState({
        creator: '',
        title:'',
        message:'',
        tags:'',
        selectedFile:''
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
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
    
           dispatch(updatePost(currentId,postData)); 

        }else{
           
           dispatch(createPost(postData))
            .then(()=>{console.log("Post created!")}); 

        }
         clear();
        
    }
    const clear = () =>{
        setCurrentId(null);
        setPostData({ 
            creator: '',
            title:'',
            message:'',
            tags:'',
            selectedFile:''
        })
    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId ? 'Edit' : 'Create'} a postcard</Typography>
                <TextField 
                    name = "creator" 
                    variant = "outlined" 
                    label="Creator" 
                    fullWidth 
                    value={postData.creator}
                    onChange={(event) => setPostData({...postData, creator: event.target.value})}
                />
                  <TextField
                    name = "title" 
                    variant = "outlined" 
                    label="Title" 
                    fullWidth 
                    value={postData.title}
                    onChange={(event) => setPostData({...postData, title: event.target.value})}
                />
                  <TextField
                    name = "message" 
                    variant = "outlined" 
                    label="Message" 
                    fullWidth 
                    value={postData.message}
                    onChange={(event) => setPostData({...postData, message: event.target.value})}
                />
                  <TextField
                    name = "tags" 
                    variant = "outlined" 
                    label="Tags" 
                    fullWidth 
                    value={postData.tags}
                    onChange={(event) => setPostData({...postData, tags: event.target.value})}
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