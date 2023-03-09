import { Button, Grid } from '@mui/material';
import React from 'react';

function IntroButton(props) {
    return (
        <Grid ><Button sx={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',minWidth:'40px',background:'#EF820D',minHeight:'40px'}}><props.Icon style={{fontSize:'16px',color:'white'}}/></Button></Grid>

    );
}

export default IntroButton;