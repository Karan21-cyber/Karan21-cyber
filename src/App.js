import React from 'react'
import { BrowserRouter, Routes , Route} from "react-router-dom";
import {Box} from "@mui/material"; 

//importing the components
import {Navbar, Feed,VideoDetail, ChannelDetail, SearchFeed} from './components';

function App() {
  return (
    <BrowserRouter>
        {/* Box is like a div element means container*/}
        <Box sx={{backgroundColor:'#000'}}>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />               
            </Routes>
        
        </Box>
    </BrowserRouter>
  )
}
 
export default App