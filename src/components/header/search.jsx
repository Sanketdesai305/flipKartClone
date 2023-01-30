import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {InputBase, Box,List, ListItem, styled} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;
const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const ListWrapper = styled(List)`
  position:absolute;
  background-color: #ffff;
  color: #000;
  margin-top: 36px;
`;
//Search bar in the hearder or navbar
const Search = () => {


  const [text,setText] = useState('');
  const [products,setProducts] = useState({});
  useEffect(()=>{
    const getProducts = async()=>{
      try{
        const res = await axios.get("https://fakestoreapi.com/products")
        setProducts(res.data)
      }catch(err){
      }
  }
    getProducts()
  },[products]);
  const getText=(text)=>{
      setText(text);
  }
  return (
    <SearchContainer>
        <InputSearchBase
        placeholder="Search for products, brands and more"
        onChange={(e)=>getText(e.target.value)}
        />
         <SearchIconWrapper>
              <SearchIcon />
          </SearchIconWrapper>
          {
            text && 
              <ListWrapper>
                {products.filter(product=>product.title.toLowerCase().includes(text.toLowerCase())).map(product=>(
                    <ListItem key={product.id}>
                      <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </ListItem>
                ))}
              </ListWrapper>
          }
    </SearchContainer>
  )
}

export default Search