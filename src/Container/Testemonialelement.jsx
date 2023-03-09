import { Avatar, Box, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import img1 from '../Asset/thinking.png'

function Testemonialelement(props) {
    const [linkd,setlinked]=useState('https://picsum.photos/200/300')
    useEffect(()=>{
        setlinked('https://picsum.photos/200/300')
    },[linkd])
    return (
        <Grid item xs={3.75}>
            <Box sx={{backgroundColor:'#21272f',p:'1rem',borderRadius:'.5rem',pl:'3rem',pr:'3rem'}}>
                <Grid sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <img src={img1} width={'34'}/>
            <Rating name="size-small" defaultValue={2} size="small" />
            </Grid>
            <Typography sx={{fontSize:'13px',margin:'auto'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum tenetur atque culpa et. Sint eaque voluptatum obcaecati</Typography>
            <Grid width={'100%'} sx={{display:'flex',mt:'.5rem',gap:'10px'}}>
            
                <Avatar src={linkd}/>
                <Grid>
                    <Typography>You know</Typography>
                    <Typography>yes you</Typography>
                </Grid>
            </Grid>
            </Box>
        </Grid>
    );
}

export default Testemonialelement;