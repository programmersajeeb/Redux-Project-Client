import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Service from '../Sevice/Service';
import { fetchProducts } from '../../../Redux/Slices/ProductSlices';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Services = () => {
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchProducts())
    }, []);
  const products = useSelector(state => state.products.discover)
  return (
    <Box sx={{ flexGrow: 1, margin:"50px 0"}}>
      <Container>
      <Typography sx={{ fontWeight: 600, margin:"30px 0" }} variant="h4" component="div">
        Featured Products
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          products.slice(0, 6).map(product=><Service
          key={product.name}
          product={product}
          ></Service>)
        }
      </Grid>
      <Link style={{textDecoration:"none"}} to="/allProducts">
        <Button style={{marginTop: "30px"}} variant="contained">Explore Products</Button>
      </Link>
      </Container>
    </Box>
  );
};

export default Services;