import React from 'react'
import { Stack,Typography } from '@mui/material'
import icon from '../../assets/icons/gym.png'
const BodyPart = ({item,bodyPart,setBodyPart}) => {
  return (
    <Stack onClick={()=>{setBodyPart(item);window.scrollTo({top:1800,left:100,behavior:'smooth'})}}
         sx={ {
                borderTop: item === bodyPart ?'2px solid #ff2625':"",
                background:'#fff',
                width:240,
                height:240,
                borderBottomLeftRadius:20,
                cursor:"pointer",
                gap:'48px'
              }}
            type="button"
            alignItems={"center"}
            justifyContent={"center"}
            className='bodyPart-card'
    >
        <img src={icon} style={{width:'40px',height:"40px"}}/>
        <Typography fontSize={24} fontWeight={'bold'} color={"#3A1212"} textTransform={"capitalize"}>{item}</Typography>
    </Stack>
  )
}

export default BodyPart