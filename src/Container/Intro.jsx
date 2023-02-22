import { Grid, Typography } from '@mui/material';
import React from 'react';

const Intro = () => {
    return (
        <Grid container>
            <Grid item>
                <Typography>Hi,<span style={{color:'orange'}}>I`m</span><br/><span style={{color:'orange'}}>Muhammad Shahbaz Nisar</span></Typography>
            </Grid>
        </Grid>
    );
};

export default Intro;