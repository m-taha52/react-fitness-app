import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
import { padding } from '@mui/system'


const HeroBanner = () => {
  return (
    <Box 
    sx={{
        mt: {
            lg: '212px',
            xs: '70px'
        },
        ml: {
            sm: '50px',
        }
    }}
    position="relative"
    p='20px'
    >
        <Typography
        color="#FF2625"
        fontWeight='600'
        fontSize="26px"
        >
            Fitness Club
        </Typography>

        <Typography 
        fontWeight='700'
        sx={{
            fontSize: {
                lg: '44px',
                xs: '40px'
            },

        }}
        marginBottom='23px'
        marginTop='30px'
        >
            Sweat, Smile <br /> And Repeat
        </Typography>

        <Typography fontSize='22px' fontFamily="Alegreya" lineHeight="35px" mb={4}>
            Check out the most effective exercises
        </Typography>
        <Button 
        variant="contained"
         color="error"
         href="#exercises"
         sx={{
             backgroundColor: "#FF2625",
             padding: '10px'
         }}
         >
            Explore Exercises
        </Button>
        
        <Typography
        fontWeight={600}
        fontSize='200px'
        color="#FF2625"
        mt={3}
        sx={{
            opacity: '0.1',
            display: {
                lg: 'block',
                xs: 'none'
            }

        }}
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
        
    </Box>
  )
}

export default HeroBanner