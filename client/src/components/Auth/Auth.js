import React, {useState} from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container, Select, MenuItem} from '@material-ui/core';
import useStyles from './styles';
import LockOutlined from '@material-ui/icons/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Input from './Input';
import {signup, signin} from '../../actions/auth'


const Auth = () => {
    
    const classes = useStyles();
    const initialState = {firstName:'',lastName:'', email:'', password:'', confirmPassword:''}
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit =(e)=>{
        e.preventDefault();
        
        if(isSignup){
            dispatch(signup(formData,navigate))
        }else{
            dispatch(signin(formData,navigate))
        }
    };
    const handleChange =(e)=>{ //Same handle change for each field from form 
        console.log("Change!");
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const switchMode =()=> {
        setIsSignup((prevMode) => !prevMode);
        setShowPassword(false);
    }

   


  return (
    <Container component='main' maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlined />
            </Avatar>
            <Typography variant='h5' >{isSignup ? 'Sign Up' : 'Sign In'}</Typography>

            <form onSubmit={handleSubmit} className={classes.form}>
                <Grid container spacing={2}>
                    {
                        isSignup && ( //ONLY IF isSignup == true
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        ) 
                    }
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name='password' label='Password' handleChange={handleChange} type = {showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                    { isSignup && (
                        <>
                            <Input name="confirmPassword" label="Repeat password" handleChange = {handleChange} type="password" />
                        </>
                    )}
            
                </Grid>
                <Button type ="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignup ? 'Sign Up' : 'Sign In'} </Button>
                <Grid container justifyContent='center'>
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignup ? 'Already have an account? Sign in!' : 'No account yet? Sign up!'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>

    </Container>
  )
}

export default Auth;