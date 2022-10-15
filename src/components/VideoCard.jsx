import React from 'react'
import {Link} from "react-router-dom"
import {Typography,Card, CardContent,CardMedia} from "@mui/material"
import {CheckCircle} from "@mui/icons-material"
import {demoVideoUrl,demoChannelTitle,demoVideoTitle,demoChannelUrl} from "../utils/constants"

// extracting videoId and snippet from the array
function VideoCard({video}) {
    const videoId = video.id.videoId;
    const snippet = video.snippet;
    
    return (
        <Card sx={{width:{ xs:'100%',sm:'358px', md:'320px'},boxShadow:'none',borderRadius:0}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
            {/* We use '?' to make undefined and remove the errors */}
            <CardMedia 
                image={snippet?.thumbnails?.high?.url} 
                alt = {snippet?.title}
                sx={{width:{xs:'100%',sm:'358px',md:'320px'}, height:180 }}
            />
            <CardContent
                sx={{backgroundColor:'#1e1e1e',
                    height:'106px',}}
            >   
                {/* For videos */}
                <Link to = {videoId ? `/video/${videoId}` : demoVideoUrl} >
                    <Typography varient="subtitle1" 
                                fontWeight="bold" 
                                color="#FFF" 
                    >
                        {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link> 
                {/* For Channels */}
                <Link to = {snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                    <Typography varient="subtitle2" 
                                fontWeight="bold" 
                                color="gray" 
                    >
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px' }} />
                    </Typography>
                </Link> 
            </CardContent>
            </Link>
        </Card>
  )
}

export default VideoCard