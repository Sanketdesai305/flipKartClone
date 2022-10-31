import React from 'react';
import {Link} from 'react-router-dom';
import { Box, Typography, Badge, Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import {useSelector} from 'react-redux';
const Wrapper = styled(Box)`
display:flex;
margin: 0 3% 0 auto;
& > Button, & > p, & > div{
    margin-right: 40px;
    font-size:16px;
    align-items:center;
} 
`;
const Container = styled(Box)`
    display:flex;
    color:inherit;
`;
const LoginButton = styled(Button)`
    color: #2874f0;
    background-color: #FFFFFF;
    text-Transform: none;
    font-Weight: 600;
    border-radius: 2;
    padding: 5px 40px;
    height: 32px;
    box-shadow: none;
`;
// This component is a cart button and what comes after search field on the right side
const Custombuttons = () => {
    const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Wrapper>
        <LoginButton variant="contained">Login</LoginButton>
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Container >
                <Link to='/Cart' style={{color:'inherit'}}>               
                    <Badge badgeContent={quantity} color='secondary'>
                        <ShoppingCart />
                    </Badge>
                </Link>
                <Link to='/Cart' style={{color:'inherit', textDecoration:'none'}}><Typography style={{ marginLeft: 10 }}>Cart</Typography></Link>
            </Container>
    </Wrapper>
  )
}

export default Custombuttons;