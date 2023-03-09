import { Grid, Link, Typography } from '@mui/material';
import React from 'react';

function Linkelement(props) {
    return (
        <Grid>
       <Link href={props.link} sx={{color:'white',textDecoration:'none'}}><Typography>{props.value}</Typography></Link></Grid>
    );
}

export default Linkelement;