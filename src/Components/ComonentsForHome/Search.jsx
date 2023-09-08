import React,{useEffect,useState} from 'react'
import {Box,Button,Stack,TextField,Typography} from "@mui/material"
import { fetchdata,exercisesOptions } from '../../utils/fetch-data';
import HorizontalScrollbar from "./HorizontalScrollbar" 

const SearchComponents = ({bodyPart,setBodyPart,setExo}) => {
  
  const [serch,setSerch]=useState('');
   const [bodyParts,setBodyParts]=useState([]);
 

  // useEffect when the comppnants eander at first time will fetch all the body parts like chest, back,arm,abs
   useEffect(()=>{
    const fetchBodyParts = async ()=>{
      const bodyPartsData= await fetchdata('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exercisesOptions)
      setBodyParts(['all', ...bodyPartsData]);
      
    }
    fetchBodyParts();
   },[])

  //  when the user click on the serch button wil cal this function 
  const handleSubmit = async()=>{
    if(serch){
        const resultOfExercises = await fetchdata('https://exercisedb.p.rapidapi.com/exercises',exercisesOptions);
        const searchedExo =resultOfExercises.filter((exo)=>exo.name.toLowerCase().includes(serch)
        ||exo.target.toLowerCase().includes(serch)
        || exo.equipment.toLowerCase().includes(serch)
        || exo.bodyPart.toLowerCase().includes(serch))
        
        setSerch('');
        setExo(searchedExo);
       
    }
   }

  return (
    <Stack p="20px"  justifyContent={'center'} alignItems={'center'}>

      <Typography mb={'20px'} sx={{
        fontSize:{lg:'40px',sm:'25px',xs:20}
      }} fontWeight={800} fontSize={'25px'} mt={4} textAlign={'center'}>
        Awesome Exercises You <br/>Should Know
      </Typography>

      <Box  position={"relative"}>
        
        <TextField   height='73px'  sx={{
          
          input:{
            fontWeight:'700',
            border:'none',
            borderRadius:'4px',
            
          },
          width:{lg:'1000px',ms:'800px',xs:'300px'},
          backgroundColor:'#fff',
          borderRadius:'40px',
        
        }}

        value={serch}
          onChange={(e)=> {setSerch(e.target.value.toLowerCase())}}
          placeholder='Search Exercises'
          type='text'
        />
        <Button onClick={handleSubmit} sx={{
          height:"76px",
          bgcolor:"#ff2625",
          color:"#fff",
          height: '56px',
        
          
          fontSize:'15px',
          width:{lg:"172px",sm:"90px",xs:'70px'},
          position:'absolute',
          right:'0',
        
          

        }} className='search-btn'>search</Button>
    </Box >
    <Box sx={{position:'relative',width:'100%',p:'20px'}}>
      <HorizontalScrollbar bodyPart={bodyPart} setBodyPart={setBodyPart} data={bodyParts} isBodyParts/>

    </Box>
    </Stack>
  )
}

export default SearchComponents