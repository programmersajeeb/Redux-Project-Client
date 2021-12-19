import { Box } from '@mui/material';
import React from 'react';
import MenuBar from '../../MenuBar/MenuBar';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Sevices/Services';

const Home = () => {
  return (
    <Box>
      <MenuBar></MenuBar>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Footer></Footer>
    </Box>
  );
};

export default Home;