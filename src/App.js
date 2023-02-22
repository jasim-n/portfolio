import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import Navbar from './Container/Navbar';
import Intro from './Container/Intro';

function App() {
  return (
   <Grid container sx={{pl:'2rem',pr:'2rem'}}>
    <Navbar/>
    <Intro/>
   </Grid>
  );
}

export default App;
