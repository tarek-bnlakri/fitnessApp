import { Link } from "react-router-dom"
import React from 'react'
import Stack  from '@mui/material/Stack';
import Logo from "../assets/images/Logo.png"
import { BorderBottom } from "@mui/icons-material";


const Navbar = () => {
    return(
       
        <Stack 
         direction={'row'} 
         
         sx={{gap:{sm:'122px',xs:'40px'},mt:{sm:'32px',xs:'20px'}}} px='20px'>
            <Link to={'/'}><img src={Logo} style={{width:'50px',height:'50px',margin:'0 20px'}}    /></Link>
           
            <Stack direction="row" alignItems="flex-end" fontSize={'1.5rem'} gap={'40px'} >
                <Link style={{textDecoration:'none',color:"#3A1212", borderBottom:'3px solid #FF2625'}} to={'/'}>home</Link>
                <Link style={{textDecoration:'none',color:"#3A1212", borderBottom:'3px solid #FF2625'}} to={'/AboutMe'}>About Me</Link>
                <Link to={'/Exercises'} style={{textDecoration:'none',color:"#3A1212"}}>Exercises</Link>
                {/* <a href="#Exercises" >Exercises</a> */}
            </Stack>
        </Stack>
           
    )
 
}

export default Navbar