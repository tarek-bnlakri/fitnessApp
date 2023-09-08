import React ,{useEffect,useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box,Stack,Typography} from "@mui/material"
import {exercisesOptions,fetchdata} from "../../utils/fetch-data"
import ExercisesCard from "./ExercisesCard"


const ExercicesForHome = ({setExo,bodyPart,exo}) => {
  const [page, setpage] = useState(1);
  const paginate =(e,value)=>{
    
    setpage(value);
    window.scrollTo({top:1600,behavior:'smooth'})

  }

useEffect(() => {
  const ExersicesPerBodyPart= async()=>{
    if(bodyPart === 'all'){
      const resultOfExercises = await fetchdata('https://exercisedb.p.rapidapi.com/exercises',exercisesOptions);
      setExo(resultOfExercises);
    }else{
      const bodyPartsData= await fetchdata(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exercisesOptions)
      setExo(bodyPartsData)
    }
  }
  ExersicesPerBodyPart();
  
}, [bodyPart])
  
  // for pagination 
  const LastIndex=9*page;
  const firstIndex=LastIndex-9;
  const ExersisePerPag=exo.slice(firstIndex,LastIndex)
  return (

    <Box id='exercises' sx={{mt:{lg:'110px'}}} mt={'50px'}  p='20px'>
      
      <Typography  variant='h3' mb={'46px'}>
        Shwing Results
      </Typography>
     
      
    
     
      <Stack direction={"row"} sx={{gap:{lg:"110px",xs:'50px'}}}  justifyContent={"center"} flexWrap={"wrap"}>
        {ExersisePerPag.map((value,id)=>(<ExercisesCard  key={id}value={value}/>))}
      </Stack>
      
      
      {/* for pagination  */}
      <Stack mt='100px' alignItems={"center"}>
        {
          exo.length >9 && (
          <Pagination 
            count={Math.ceil(exo.length/9)} 
            page={page}
            onChange={paginate}
          />
        )
        }
      </Stack>
    </Box>
  )
}

export default ExercicesForHome