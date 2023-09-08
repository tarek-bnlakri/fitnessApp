import React from 'react'
import { Box ,Stack,Button,Typography} from '@mui/material'
import HomeImage from "../../assets/images/banner.png"

const Text = () => {
  return (
    <Box position='relative' sx={{
        mt:{lg:'212px', xs:'70px'},
        ml:{sm:'50px'}
        }}  p={'20px'} >

            <Typography fontWeight={'800'} fontSize={'1.3rem'} color={'#FF2625'}>Fitness Club</Typography>
            
            <Typography fontWeight={'700'} sx={{
                fontSize:{lg:'44px',sm:'2rem',xs:'40px'}
            }}  mb="23px" mt="30px"  >Sweat ,Smile<br/>And Repeat</Typography>

            <Typography mb={2} lineHeight={'35px'} fontSize={'22px'} >Check out the most effective exercises personnalized to you</Typography>

            <Button sx={{
                padding:'0.68rem',
                background:"#FF2625"
            }} href='#exercises' variant="contained" color="error" >Explore Exercises</Button>
            <Typography fontSize={'200px'} sx={{
                opacity:0.1,
                display:{lg:'block',sm:'none',xs:'none'}
               
            }} fontWeight={'600'} color={'#FF2625'} >Exercices</Typography>
            <img className='hero-banner-img' src={HomeImage}/>
      

    </Box>
  )
}

export default Text