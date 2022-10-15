import React ,{useState,useEffect} from 'react'
import {Box,Stack,Typography} from "@mui/material"
import { SideBar,Videos ,Loading} from './'
import {fetchFromAPI} from "../utils/fetchFromAPI"

function Feed() {

  const [selectedCategory, setSelectedCategory] = useState('New'); 
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    if(!videos.length)
      return <Loading />

  return (
    // this sx is for big device and md for medium device like mobile
    <Stack
      sx={{
        flexDirection:{sx:"column",md:"row"}
      }}
    >
      <Box
        sx={{
          height:{sx:'auto',md:'92vh'},
          borderRight:'1px solid #3d3d3d',
          px:{sx:0, md:2}
        }}
      >
        <SideBar  
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Typography is like a Heading tags */}
        <Typography 
          className='copyright'
          variant='body2'
          sx={{
            mt:1.5,
            color:'#fff'
          }}
        >
          CopyRight 2022 <i>CodeWithMe</i>
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{overflowY:'auto',
            height:"90vh",
            flex:2
        }}
      >
          <Typography varient="h4" fontWeight="bold" mb={2}
          sx={{color:'white'}}>
            {selectedCategory} <span style={{color:"#F31503"}}>videos</span>
          </Typography>

          <Videos videos ={videos} />
      </Box>

    </Stack>
    )
}

export default Feed