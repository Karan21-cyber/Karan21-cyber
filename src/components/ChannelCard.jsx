import React from 'react'
import {Box,CardContent,CardMedia,Typography} from "@mui/material"
import {CheckCircle} from "@mui/icons-material"
import {Link} from "react-router-dom"
import {demoProfilePicture} from "../utils/constants"

function ChannelCard({channelDetail,marginTop}) {

    // it will run when it is passed from the cardDetails
    const suscribers = channelDetail?.statistics?.subscriberCount;
    const countVideos = channelDetail?.statistics?.videoCount;

  return (
    <Box
        sx={{boxShadow:'none',
            borderRadius:'20px',
            display:'flex',
            justifyContent:'center',
            textAlign:'center',
            width:{xs:'356px',md:'320px'},
            height:'326px',
            margin:'auto',
            marginTop:{marginTop}
        }}
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                textAlign:'center',
                color:'#fff'
            }}>
                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{width:"180px", height:'180px',
                           borderRadius:'50%',
                           border:'1px solid #e3e3e3' 
                    }}
                >
                </CardMedia>
                <Typography varient="h6">
                        {channelDetail?.snippet?.title }
                        <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px' }} />
                </Typography>
                {/* if exists then render else don't  */}
                {suscribers && (
                    <Typography >
                        {parseInt(suscribers).toLocaleString()} {suscribers <= 1 ? "Suscriber" : "Suscribers"}
                    </Typography>
                )}
                {countVideos && (
                    <Typography >
                        {parseInt(countVideos).toLocaleString()} {countVideos <= 1 ? "video" : "Videos"}
                    </Typography>
                )}
                
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard