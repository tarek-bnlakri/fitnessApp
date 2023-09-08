import React ,{useEffect,useState} from 'react'
import {Box,Stack,Typography} from "@mui/material"
import { useParams } from 'react-router-dom'
import {exercisesOptions,fetchdata} from "../utils/fetch-data"
import SimilarExercises from "../Components/Components-Exersises/SimilarExercises"
import ExerciseVideos from "../Components/Components-Exersises/ExerciseVideos"
import Detail from "../Components/Components-Exersises/Detail"
import {optionsVidios} from "../utils/fetch-data"

const Exercises = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [vidio, setVidio] = useState([]);
  const [exerciseSimiler,setExerciseSimiler]=useState([]);
  const [exerciseEquipment,setExerciseEquipment]=useState([])
  const {id}=useParams();

  useEffect(() => {
    const fetchExercisesData= async()=>{
      
      const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
      const YoutubUrl='https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData= await fetchdata(`${exerciseDbUrl}/exercises/exercise/${id}`,exercisesOptions);
      setexerciseDetail(exerciseDetailData);

      const exerciseDetailDataVidio= await fetchdata(`${YoutubUrl}/search?query=${exerciseDetailData.name}`,optionsVidios);
      
      setVidio(exerciseDetailDataVidio.contents);

      const exercisesSimilerData=await fetchdata(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exercisesOptions);
      setExerciseSimiler(exercisesSimilerData);

      const exersiceEquipmentData=await fetchdata(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exercisesOptions);
      setExerciseEquipment(exersiceEquipmentData);
      

    }
    fetchExercisesData();
    
  
    
  }, [id])
  

  return (
  
  <Box>

     <Detail exerciseDetail={exerciseDetail} />
     <ExerciseVideos vidio={vidio} name={exerciseDetail.name} />
      <SimilarExercises exerciseSimiler={exerciseSimiler} exerciseEquipment={exerciseEquipment} />

   </Box>
  )
}

export default Exercises