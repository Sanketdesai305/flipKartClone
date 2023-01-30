import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import {Box, Typography, styled}  from '@mui/material';
const Image = styled('img')`
    width:100px;
    height:150px;
    object-fit:contain;
`;

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;
`;


//carousel responsive sliding experience
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
//this component is the sliding products in the home page
const Slide = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const getProducts = async()=>{
          try{
            const res = await axios.get("https://fakestoreapi.com/products")
            setProducts(res.data)
          }catch(err){
          }
      }
        getProducts()
      });
      
  return (
           //Carousel library helps with the slider 
           <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
    >
    {
       products.map(product=>(
        <Link to={`/product/${product.id}`} key={product.id}>
            <Box textAlign='center' style={{padding: '25px 15px'}} key={product.id}>
                <Image src={product.image} alt='product' key={product.id}/>
                <Text>{product.title}</Text>
            </Box>       
        </Link>
       
       ))
    }
    </Carousel>

 
  )
}

export default Slide
