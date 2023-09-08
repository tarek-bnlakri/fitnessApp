import React from 'react'
import {Box,Button,Stack,Typography} from "@mui/material" 

import BodyPartImage from "../../assets/icons/body-part.png"
import TargetImage from "../../assets/icons/target.png"
import EquipmentImage from "../../assets/icons/equipment.png"

const Detail = ({exerciseDetail}) => {
    const {bodyPart,gifUrl,name,target,equipment}=exerciseDetail
    console.log(gifUrl)
    const exersicesDetail=[
        {
            icon:BodyPartImage,
            name:bodyPart
        },
        {
            icon:TargetImage,
            name:target
        },
        {
            icon:EquipmentImage,
            name:equipment
        }]
  return (
    
    <Stack gap='60px' sx={{flexDirection:{lg:'row'},p:'20px',alignItems:"center"}}>
        <img loading='lazy'  className='detail-image' src={gifUrl}/>
        <Stack sx={{gap:{lg:'35px',xs:'20px' }}}>
            <Typography fontWeight={700} variant='h3'>
                {name}

            </Typography>
            <Typography>
                Exercises Keep you String .{name} {`  `}
                is one of the best exerxises to target your {target}. it will help you improve your mood and gain energy.
            </Typography>
         
                {exersicesDetail.map((item)=>(
                    <Stack alignItems={"center"} gap="26px" direction={"row"}>
                        <Button sx={{background:"#fff2db",borderRadius:"50%",width:"100px",height:'100px'}}><img style={{width:'50px',height:'50px'}} src={item.icon}/></Button>
                        <Typography textTransform={"capitalize"} variant='h5'> {item.name}</Typography>
                    </Stack>
                )
                )
                }

        </Stack>
    </Stack>
  )
}

export default Detail