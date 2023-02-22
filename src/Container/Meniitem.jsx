import { Grid, Typography } from '@mui/material';
import React from 'react';

const Meniitem = (props) => {
    return (
       <Grid sx={{cursor:'pointer'}}>
        <Typography sx={{color:'white'}}>{props.txt}</Typography>
       </Grid>
    );
};

export default Meniitem;