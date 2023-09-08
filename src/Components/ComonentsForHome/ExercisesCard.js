import React from 'react'
import Pagination from '@mui/material/Pagination'
import {Box,Stack,Typography, Button} from "@mui/material"
import { Link } from 'react-router-dom'
const ExercisesCard = ({value}) => {
  return (
    <Link  className='exercise-card' to={`/Exercises/${value.id}`}>
        <img src={value.gifUrl} alt={value.name} loading='lazy'/>
        <Stack direction={"row"}>
            <Button  sx={{ml:'21px', color:'#fff', background:"#ffa9a9",fontSize:'14px',borderRadius:"20px",textTransform:'capitalize',}} >
                {value.bodyPart}
            </Button>

            <Button sx={{ml:'21px', color:'#fff', background:"#fcc757",fontSize:'14px',borderRadius:"20px",textTransform:'capitalize'}} >
                {value.target}
            </Button>

        </Stack>
        <Typography mt={'11px'} pb={'10px'} ml={'10px'} textTransform={'capitalize'} fontWeight={700} fontSize={18} color={'black'}>
            {value.name}
        </Typography>
    </Link>
  )
}

export default ExercisesCard