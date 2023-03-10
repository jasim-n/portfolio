import { Grid, Typography } from '@mui/material';
import React from 'react';
import logo from '../logo.png'
import Meniitem from './Meniitem';
import SearchBar from './SearchBar';


const Navbar = () => {
    return (
       <Grid item xs={12} sx={{pl:'2rem',pr:'2rem'}}>
        <Grid container sx={{alignItems:'center',pl:'1.5rem',pr:'1.5rem',pt:'1rem', '& .MuiTypography-root':{fontWeight:'600'}}}>
            <Grid item xs={1.5} sx={{alignItems:'center',display:'flex',gap:'.5rem'}}>
                <img src={logo} width={'50px'}/>
                <Typography sx={{display:'inline',color:'white'}}>Portfolio</Typography>
            </Grid>
            <Grid item xs={7.5}>
                <Grid container sx={{gap:'2rem',justifyContent:'center'}}>
                <Meniitem txt='Home'/>
                <Meniitem txt='Projects'/>
                <Meniitem txt='Resume'/>
                </Grid>
            </Grid>
            <Grid item xs={3}><SearchBar/></Grid>
        </Grid>
       </Grid>
    );
};

export default Navbar;