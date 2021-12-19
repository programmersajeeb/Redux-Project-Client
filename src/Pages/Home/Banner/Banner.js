import { Box, Button, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid style={{width:"100%", height:"80vh", backgroundImage:"url(https://cdn.shopify.com/s/files/1/2496/9194/files/slider1-bg.jpg?v=1621578898)", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} item xs={12} md={12}>
          <Box style={{marginTop:"27vh", paddingRight:"5%"}} sx={{ textAlign: 'right' }}>
          <Typography style={{color:'#f3e0ca', textTransform:"uppercase", fontSize:"30px"}} variant="body1" gutterBottom> FALL IN LOVE </Typography>
          <Typography style={{color:'#9f7a49', textTransform:"uppercase"}} variant="h3" gutterBottom component="div"> Redefining the meaning of time </Typography>
          <Link style={{textDecoration:"none"}} href="/allProducts">
          <Button style={{color:'#9f7a49', textTransform:"uppercase", fontSize:"20px"}} variant="outlined">EXPLORE</Button>
          </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};

export default Banner;