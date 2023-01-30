import React from 'react';
import { Typography, Box, styled } from '@mui/material'; 
import {data} from '../../Constants/data';
import {Link} from 'react-router-dom';
const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;
const Component = styled(Box)`
  display:flex;
  margin-top:70px;
  justify-content: space-between;
  margin-bottom: 10px;
  box-shadow: 3px 3px #eae8e866;
`;
//This component below search bar shows different categories
const categories = () => {
  return (
    <Component>
       {
                data.map(temp => (
                  <Link to={`/products/${temp.text}`} key = {temp.url}>
                    <Box key = {temp.url}>
                        <img src={temp.url} style={{  width: 64 }} />
                        <Text>{temp.text}</Text>
                    </Box>
                  </Link>
                ))
            }
    </Component>
  )
}

export default categories
