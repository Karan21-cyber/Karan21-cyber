import React ,{useState,useEffect} from 'react'
import {Box,Typography} from "@mui/material"
import { Videos } from './'
import {fetchFromAPI} from "../utils/fetchFromAPI"
import {useParams} from "react-router-dom"


function SearchFeed() {

   const [videos, setVideos] = useState([]);

   const {searchTerm} = useParams();

  useEffect(() => {
    // setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
    // this sx is for big device and md for medium device like mobile

    <Box
      p={2}
      sx={{overflowY:'auto',
          height:"90vh",
          flex:2  
      }}
    >
      <Typography varient="h4" fontWeight="bold" mb={2}
        sx={{color:'white'}}>
          Search Results for: <span style={{color:"#F31503"}}>{searchTerm} </span> videos
      </Typography>

      <Box
        sx={{display:'flex',p:"2" }}
      >
        <Box sx={{mr:{sm:'100px'}}} />
        <Videos videos={videos} />
      </Box>
    
    </Box>
    )
}

export default SearchFeed