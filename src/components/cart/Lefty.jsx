import React from 'react';
import { Box, Typography, Button, styled } from '@mui/material';
import {GroupedButton} from './Groupbutton';
import {useSelector,useDispatch} from 'react-redux';
import { clearProduct} from '../../redux/cartRedux';
//this component shows up on the left side of cart page
const Wrapper = styled(Box)`
    background-color: #f9f6f6;
    margin-top:10%;
`;
const Component = styled(Box)`
    border-top: 1px solid #f9f6f6;
    display:flex;
    background-color: #fff;
`;
const Left = styled(Box)`
    margin:20px;
`;
const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`;

const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
display: flex;
margin-left: auto;
background: #fb641b;
color: #fff;
border-radius: 2px;
width: 250px;
height: 51px;
`;

const Boxy = styled(Box)`
    margin-top: 10px;
`;
export const Lefty = () => {
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch();
    const clearfunc=()=>{
        dispatch(clearProduct({...cart.product})
        );
    };

    //assured logo from the internet
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  return (
    //looping through every product in the cart to display them
    <Wrapper>   
   {cart.products.map(product=>( <Component>
        <Left>
            <img src={product.image} style={{ height: 110, width: 110 }}alt='product'/>
            <GroupedButton />
        </Left>
        
        <Boxy>
            <Typography>{product.title}</Typography>
            <SmallText>Seller:RetailNet
                <Box component='span'><img src={fassured} style={{ width: 50, marginLeft: 10 }}  alt='flipkart'/></Box>
            </SmallText>

            <Typography style={{margin: '20px 0'}}>
                    <Cost component="span">₹{product.price}</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span"><strike>₹44</strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">50% off</Discount>
                </Typography>
                
                <Remove onClick={clearfunc}>Remove</Remove>
        </Boxy>
    </Component>))}
    <BottomWrapper>
            <StyledButton  variant="contained">Place Order</StyledButton>
    </BottomWrapper>
    </Wrapper>
  )
}

