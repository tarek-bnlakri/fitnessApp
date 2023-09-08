import React from 'react'
import {Box,Stack,Typography} from "@mui/material"
import HorizontalScrollbar from "../ComonentsForHome/HorizontalScrollbar"
import Loader from '../Loader'


const SimilarExercises = ({exerciseEquipment,exerciseSimiler}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
      
      <Typography mt={5} mb={5} variant='h3'>Exercises that <span style={{color:"red"}}>target</span> the same muscle group</Typography>
      <Stack direction={'row'} sx={{p:"2px", position:"relative"}}>
       
        {exerciseSimiler.length ? <HorizontalScrollbar data=
        {exerciseSimiler} />: <Loader/>}
      
      </Stack>

      <Typography mt={5} mb={6} variant='h3'>Exercises that use the same 
        Equipment 
      </Typography>
      <Stack direction={'row'} sx={{p:"2px", position:"relative"}}>
        
        {exerciseSimiler.length ? <HorizontalScrollbar data={exerciseEquipment} />: <Loader/>}
      
      </Stack>

    </Box>
  )
}

export default SimilarExercises