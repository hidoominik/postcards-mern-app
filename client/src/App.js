import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

const App = () => {
   
    return(
        <Container maxWidth="lg">
           <Navbar/>
           <Home/>
        </Container>
    )
}

export default App;