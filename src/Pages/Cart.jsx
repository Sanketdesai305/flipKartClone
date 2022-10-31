import React from 'react'
import {Lefty} from '../components/cart/Lefty';
import {TotalView} from "../components/cart/Righty";
import {Box,styled} from '@mui/material';
import Header from '../components/header/header';
//the cart page includes 2 components 
const Cart = () => {

    const Lbox = styled(Box)`
        width:70%;
        margin: 0px 10px;
    `;
    const Rbox = styled(Box)`
        width:40%;
        margin: 75px 20px ;
        
    `;
    const Wrapper = styled(Box)`
        background-color: #f9f6f6;
        display:flex;
        width: 100%;
        height: 100vh;
    `;
  return (
    <Wrapper>
        <Header />
            <Lbox>
                <Lefty/>
            </Lbox>
            <Rbox>
                <TotalView/>
            </Rbox>
    </Wrapper>
  )
}

export default Cart