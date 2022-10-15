import React ,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import {Box} from "@mui/material"
import {Videos,ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';

function ChannelDetail() {

 
  const [channelDetail,setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([]);

  const {id} = useParams();

  console.log(channelDetail,videos);
  
  useEffect(() =>{
    // getting the information of channelDetail by passing the channelId
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    // getting the videos from the given channelId
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))

  },[id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div 
          style={{
            background: 'linear-gradient(90deg, rgba(156,131,194,1) 0%, rgba(107,59,113,1) 0%, rgba(132,148,190,1) 25%, rgba(109,161,155,1) 75%, rgba(160,137,186,1) 100%)',
            zIndex:10,
            height:'300px'
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>

    <Box display="flex" p="2">
      <Box sx={{ mr: { sm:"100px"}}} />
        <Videos videos={videos} />
    </Box>


    </Box>
  )
}

export default ChannelDetail