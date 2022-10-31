// import React from 'react';
// import {useLocation} from "react-router-dom";
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Header from '../components/header/header';
// import {Box,styled} from '@mui/material';

// const Container = styled(Box)`
//     padding: 20px;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
// `;

/////////////////////////              IGNORE THIS PAGE                        ////////////// 
// const Category = () => {
//   const [products,setProducts] = useState({});
//   const [filteredProducts,setFilteredProducts] = useState([]);
//   const location = useLocation();
//   const category = location.pathname.split("/")[2];
//   console.log(category)

//   useEffect(()=>{
//     const getProducts = async()=>{
//       try{
//         const res = await axios.get(category ?  `https://fakestoreapi.com/products?=${category}`
//         :"https://fakestoreapi.com/products")
//         setProducts((res.data))
//       }catch(err){
//         console.log(err)
//       }
//     }
//     getProducts()
//   },[category]);

//   useEffect(()=>{
//     category && 
//       setFilteredProducts(
//         products.filter((([key,value])=>
//               value=== category
//           )   
//         ) 
//       );
//       console.log((filteredProducts))
//   },[category,products])
  
 
//   return (
//     <>
//     <Header/>
//     <Container>
//       {category && filteredProducts.map((item) => (
//         <Box item={item} key={item.id} />
//       ))}
//     </Container>

//     </>
//   )
// }

// export default Category