import { Grid, Typography } from '@mui/material';
import React from 'react';
import Linkelement from './Linkelement';
const data1=[
  {value:'About',link:'#'},
  {value:'Growers',link:'#'},
  {value:'Merchants',link:'#'},
  {value:'Parters',link:'#'},
  {value:'contact',link:'#'},

]
const data2=[
  {value:'Facebook',link:'#'},
  {value:'Twitter',link:'#'},
  {value:'Linkedin',link:'#'},
  {value:'Instagram',link:'#'},

]

function Footer(props) {
    return (
      <>
      <Grid container sx={{pl:'3rem',pt:'3rem',pr:'3rem'}}>
        <Grid item xs={3}>
            <Typography>Portfollio</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={{fontWeight:'500',width:'50%'}}>123 Market St.#22B Charlottesville, California 44635</Typography>
    

        </Grid>
        <Grid item xs={3}>
{data1.map((s,index)=><Linkelement key={index} value={s.value} link={s.link} />)}
        </Grid>
        <Grid item xs={3}>
{data2.map((s,index)=><Linkelement key={index} value={s.value} link={s.link} />)}
        </Grid>
      </Grid>
      <Grid container sx={{pl:'3rem',pt:'3rem',pr:'3rem'}}>
        <Grid item xs={3}>
   
        <Typography sx={{textDecoration:'underline',textUnderlineOffset:'4px'}}>03064233224</Typography>
       <Typography sx={{textDecoration:'underline',textUnderlineOffset:'4px'}}>muhammadsr972@gmail.com</Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography>All rights reserved</Typography>
        </Grid>
      </Grid>
      </>
    );
}

export default Footer;