import React ,{useState} from 'react'
import { Box } from '@mui/material'
import ExercicesForHome from '../Components/ComonentsForHome/ExercicesForHome'
import Search from '../Components/ComonentsForHome/Search'
import Text from '../Components/ComonentsForHome/Text'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exo,setExo]=useState([]);
  return (
    <Box>
      <Text/>
      <Search setExo={setExo} bodyPart={bodyPart} setBodyPart={setBodyPart} />


      <ExercicesForHome setExo={setExo} bodyPart={bodyPart}  exo={exo} />
      
    </Box>
    
  )
}

export default Home