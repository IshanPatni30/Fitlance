import React from 'react'
import { Box } from '@mui/system'
import Stack from '@mui/system'
import { Typography } from '@mui/material'
import {Button} from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png';

//the #exercises is basically to scroll down the home page just for overview of the exercises

const HeroBanner = () => {
    return (
        <Box

            sx={{
                mt: { lg: '212px', xs: '70px' },
                ml: { sm: '50px' }
            }}
            position="relative"
            p="20px"
        >


            <Typography color="#FF2625"
                fontWeight="600"
                fontSize="26px">
                Fitness Club
            </Typography>


            <Typography fontWeight="700"
                sx={{ fontSize: { lg: '44px', xs: '40px' } }}
                mb="23px"
                mt="30px"
            >
                Sweat, Hustle <br /> and Repeat
            </Typography>


            <Typography
            fontSize="22px"
            lineHeight="35px"
            mb={6}
            >
                Check out the most Effective Exercises!!
            </Typography>

            <Button 
            variant="contained"
            color="error"
            href='#exercises'
            sx={{backgroundColor:"#ff2625",
                 padding:'10px'
                }}

            >
                Explore Exercises
            </Button>
            <Typography 
                fontWeight={600}
                fontSize='200px'
                color='#9F0BF8'
                sx={{
                    opacity:0.7,
                    display:{lg:'block',xs:'none'}
                }}
            >
                Fitlance
            </Typography>

            <img src={HeroBannerImage} alt="banner"
            className='hero-banner-img'/>

        </Box>

    )
}

export default HeroBanner;