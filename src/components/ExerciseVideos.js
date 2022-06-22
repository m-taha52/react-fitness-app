import React from 'react'
import {Box, Stack, Typography} from "@mui/material"
import {Loader} from '../components'

const ExerciseVideos = ({exerciseVideos, name}) => {
  if(!exerciseVideos.length) return <Loader />
  return (
      <Box
      p='20px'
      sx={{
        marginTop: {
          lg: '200px',
          xs: '20px'
         
        } 
      }}>
        <Typography variant='h4' mb='33px' sx={{
                  fontSize: {
                    lg: '50px',
                    xs: '20px'
                  }
                }}>
          Watch <span style={{color: '#FF2625', textTransform:"capitalize"}}> {name} </span> exercise videos
        </Typography>

        <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{
          flexDirection: {
            lg: 'row'
          },
          gap: {
            lg: '80px',
            xs: '0'
          }
        }}
        >

          {exerciseVideos?.slice(0,3).map((item,index) => (
            <a
            key={item.index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel='noreferrer'>
                <img src={item.video.thumbnails[0].url} alt='item video title' />
                <Box>
                  <Typography variant='h5' style={{color: '#000'}} sx={{
                  fontSize: {
                    lg: '25px',
                    xs: '15px'
                  },
                  marginBottom: {
                    xs: '6px'
                  }
                }}>
                    {item.video.title}
                  </Typography>
                  <Typography variant='h6' style={{color: '#000'}} sx={{
                  fontSize: {
                    lg: '25px',
                    xs: '15px'
                  },
                  marginBottom: {
                    xs: '2px'
                  }
                }}>
                    {item.video.channelName}
                  </Typography>
                </Box>
            </a>
          ))}

        </Stack>

      </Box>  )
}

export default ExerciseVideos