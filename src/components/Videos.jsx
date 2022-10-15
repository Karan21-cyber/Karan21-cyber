import React from 'react'
import {Stack, Box,CircularProgress} from "@mui/material";
import {VideoCard, ChannelCard} from "."


function Videos({videos,direction}) {

  if(!videos?.length) return "Loading..."

  return (
   <Stack
    direction = { direction|| "row" }
    flexWrap= "wrap"
    justifyContent="start"
    gap={2}
   >
    {videos.map((item,index) => (
      <Box key={index}>
        {/* checking the video id of videoID exists the go for first else go for second */}
        {item?.id?.videoId && <VideoCard video={item} /> }
        
        {item?.id?.channelId && <ChannelCard channelDetail={item} /> }
      </Box>
      ))}

   </Stack>
  )
}

export default Videos