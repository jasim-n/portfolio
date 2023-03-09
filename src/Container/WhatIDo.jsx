import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img1 from '../Asset/developer.png'
import img2 from '../Asset/img2.svg'


function WhatIDo(props) {
    return (
       <Grid container sx={{'& .MuiTypography-root':{fontWeight:'600'},backgroundColor:'#171c23',pl:'2rem',pr:'2rem',justifyContent:"space-between"}}>
        <Grid item xs={12} sx={{mt:'2.5rem'}}>
            <Typography sx={{color:'white'}}>My <span style={{color:'green'}}>services</span></Typography>

        </Grid>
        <Grid item xs={12} sx={{mb:'2rem'}}>

            <Typography sx={{color:'white'}}>What I Do</Typography>
        </Grid>
        <Grid item xs={3.75} sx={{mb:'3rem'}}>
            <Box sx={{backgroundColor:'#21272f',textAlign:'center',borderRadius:'14px',pt:'1rem',pb:'1rem'}}>
                <img src={img1} style={{width:'80px',margin:'auto'}}/>
                <Typography sx={{color:'white',fontSize:'20px'}}>React js</Typography>
                <Typography sx={{color:'grey',fontSize:'16px',pl:'1.5rem',pr:'1.5rem',width:'60%',margin:'auto'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis sapiente suscipit velit. </Typography>
            </Box>
        </Grid>
        <Grid item xs={3.75} sx={{mb:'3rem'}}>
            <Box sx={{backgroundColor:'#21272f',textAlign:'center',borderRadius:'14px',pt:'1rem',pb:'1rem'}}>
                <img src={img2} style={{width:'80px',margin:'auto'}}/>
                <Typography sx={{color:'white',fontSize:'20px'}}>React js</Typography>
                <Typography sx={{color:'grey',fontSize:'16px',pl:'1.5rem',pr:'1.5rem',width:'60%',margin:'auto'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis sapiente suscipit velit. </Typography>
            </Box>
        </Grid>
        <Grid item xs={3.75} sx={{mb:'3rem'}}>
            <Box sx={{backgroundColor:'#21272f',textAlign:'center',borderRadius:'14px',pt:'1rem',pb:'1rem'}}>
                <img src={img1} style={{width:'80px',margin:'auto'}}/>
                <Typography sx={{color:'white',fontSize:'20px'}}>React js</Typography>
                <Typography sx={{color:'grey',fontSize:'16px',pl:'1.5rem',pr:'1.5rem',width:'60%',margin:'auto'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis sapiente suscipit velit. </Typography>
            </Box>
        </Grid>
       </Grid>
    );
}

export default WhatIDo;