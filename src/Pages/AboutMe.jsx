
import React from 'react';
import { Container, Typography, Paper, Grid, Avatar, Button, IconButton } from '@mui/material';
import PersonIcon from '../assets/images/tarek.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutMe = () => {
  const facebookLink = 'https://www.facebook.com/?locale=fr_FR';
  const instagramLink = 'https://www.instagram.com/tarek__benl/';
  const githubLink = 'https://github.com/tarek-bnlakri';
  
  const linkedinLink = 'https://www.linkedin.com/in/tarek-benlakri-026a80256/';

  return (
    <Container  sx={{justifyContent:'center',alignItems:'center',mt:'50px'}} maxWidth="md">
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
           
              <img style={{width:'150px',height:'150px',borderRadius:"50%"}} src={PersonIcon}/>
            
          </Grid>
          <Grid item>
            <Typography fontWeight={500}   variant="h4" gutterBottom>
              About <span style={{color:'#E4405F'}}>Me</span>
            </Typography>
            <Typography variant="body1">
              Hello! I am <span style={{color:"red",fontWeight:500}}>TAREK BENLAKRI ,</span>  
              <ul>
                <li> Students at university UFAS College Science branch Computer Science</li>
              </ul>
             <ul>
                <li>Frontend developer with HTML CSS JavaScript and React JS material Ui</li>
                <li>Backend developer with the SQL MySQL PHP Node.js and Express JS and also Firebase</li>
                <li>I do some language programmation like C++ C Java and some Python and also git Github</li>
             </ul>
                  
                
               
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <IconButton sx={{ color: '#1877F2' }} href={facebookLink} target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton sx={{ color: '#E4405F' }} href={instagramLink} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton  sx={{ color: '#333' }} href={githubLink} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </IconButton>
          </Grid>
         
          <Grid item>
            <IconButton sx={{ color: '#0077B5' }} href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
        
      </Paper>
    </Container>
  );
};

export default AboutMe;


