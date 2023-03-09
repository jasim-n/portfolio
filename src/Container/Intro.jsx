import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import IntroButton from './IntroButton';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
const Intro = () => {
    return (
        <Grid container sx={{pl:'2rem',pr:'2rem',pb:'.5rem'}}>
            <Grid  className='red' item xs={6} sx={{pr:'4rem','& .MuiTypography-root':{fontWeight:'600'}}}>
                <Typography className='red2' sx={{color:'white'}}>Hi,<span style={{color:'orange'}}>I`m</span><br/><span style={{color:'orange'}}>Muhammad Shahbaz Nisar</span></Typography>
                <Typography sx={{color:'white'}}>Web Developer</Typography>
                <Typography sx={{color:'white',mt:'2rem',width:'70%'}}>LoremAmet deserunt esse amet nisi cillum dolore qui. Aliqua dolor laborum in ullamco esse irure velit velit.</Typography>
               <Grid sx={{display:'block'}}> <Button sx={{backgroundColor:'#17cd8a',textTransform:'initial',color:'white',fontSize:'15px',pl:'1rem',pr:'1rem',mt:'1.5rem',boxShadow:'1px 4px 9px 0px #17cd8a'}}>Lets Talk</Button></Grid>
                <Grid display={'flex'} sx={{alignItems:'center',gap:'12px',mt:'1rem'}}>
<Typography sx={{color:'white',fontSize:'18px'}}>Chekout My:</Typography>
<IntroButton Icon={InstagramIcon}/>    
<IntroButton Icon={GoogleIcon}/>  
<IntroButton Icon={GitHubIcon}/>    
</Grid>

        </Grid>
        </Grid>
    );
};

export default Intro;