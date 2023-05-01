import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { BrowserRouter } from 'react-router-dom';
//alt+shift+f to format the code
//ctrl+j to toggle the terminal
import './App.css';



import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => {
    return (
        
        <Box width="400px" sx={{width:{xl:'1488px'}}} m='auto' >
            {/*sx defines the responsiveness ,m is margin*/}
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
            //dynamic route below
                <Route path='/exercise/:id' element={<ExerciseDetail />} />

            </Routes>
            <Footer />
        </Box>

    )
}

export default App