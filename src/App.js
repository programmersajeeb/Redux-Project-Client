import React from 'react';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts/ExploreProducts';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import AddProduct from './Pages/AddProduct/AddProduct';
import AuthProvider from './Contexts/AuthProvider';


function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/manageProducts" element={<ManageProducts />}/>
                    <Route path="/addProduct" element={<AddProduct />}/>
                    <Route path="/allProducts" element={<ExploreProducts />}/>
                    <Route path="/productDetails/:ProductId" element={<ProductDetails />}/>
                </Routes>
    </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
