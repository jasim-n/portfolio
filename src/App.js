import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import Navbar from './Container/Navbar';
import Intro from './Container/Intro';
import WhatIDo from './Container/WhatIDo';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Footer from './Container/footer';
import TestemonialBlock from './Container/TestemonialBlock';

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway',
   allVariants:{
    color:'white'
   }
  },
});
function App() {

  return (
    <ThemeProvider theme={theme}>

   <Grid container >
    <Navbar/>
    <Intro/>
    <WhatIDo/>
    <TestemonialBlock/>
    <Footer/>
   </Grid>
   </ThemeProvider>
  );
}

export default App;
