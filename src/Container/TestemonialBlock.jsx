import { Grid } from '@mui/material';
import React from 'react';
import Testemonialelement from './Testemonialelement';

function TestemonialBlock(props) {
    return (
       <Grid container sx={{pt:'2rem',pb:'2rem',pl:'2rem',pr:'2rem',backgroundColor:"#171c23",justifyContent:'space-between'}}>
        <Testemonialelement/>
        <Testemonialelement/>
        <Testemonialelement/>

       </Grid>
    );
}

export default TestemonialBlock;