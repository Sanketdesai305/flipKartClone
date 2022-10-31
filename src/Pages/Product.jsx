import React from 'react';
import {useLocation} from "react-router-dom";
import {useState,useEffect} from 'react';
import axios from 'axios';
import Header from '../components/header/header';
import {Box,Typography,Button, Table, TableBody, TableRow, TableCell ,styled} from '@mui/material';
import { LocalOffer as Badge } from '@mui/icons-material';
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from 'react-redux';
const Image = styled('img')`
    margin-top:22%;
    object-fit:contain;
`;

const Title = styled(Typography)`
        margin-top: 15%;
        font-size: 25px;
        margin-bottom: 20px;
`;
const Desc = styled(Typography)`
        font-size: 15px;
        margin-bottom: 20px;

`;
const Price = styled(Box)`
    font-size: 40px;
    margin-right  : 15px ;
`;
const Discount = styled(Box)`
    font-size: 25px;
    text-decoration: line-through;
`;

const Rate = styled(Box)`
    display:flex;
    align-items: center;
`;

const Text = styled(Box)`
    display:flex;
    flex-direction: column;
    padding:5%;
`;
const Wrapper = styled(Box)`
    display:flex;
`;
const Buy = styled(Button)`
    margin-left: 50px;
    padding:12px 30px;
    border-radius: 0%;
`;
const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;
const Static = styled(Box)`
position:relative;
`;
const Product = () => {
    //this code will fetch part of url path
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product,setProduct] = useState({});
    const dispatch = useDispatch();
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    //delivery date counts 5 days from today 
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    //FETCH API's 
    useEffect(()=>{
        const getProduct = async ()=>{
          try{
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(res.data)
            
          }catch(err){
            console.log(err)
          }
        }
        getProduct();
      },[id])
      //function that adds product onto cart
    const handleClick=()=>{
        dispatch(addProduct({...product}));
    }
    //rendering all the product info into JSX elements
  return (
    <> 
    <Header/>
    <Wrapper>
        <Static>
        <Image src={product.image} style={{width:500}}/>
        <Buy onClick={handleClick} variant="contained" color="secondary" style={{backgroundColor:'#fb8c00'}}>
                Add to cart
        </Buy>
        <Buy variant="contained" color="secondary" style={{backgroundColor:"#fd622a", padding:'12px 50px'}}>
                Buy Now
        </Buy>
        </Static>
        <Text>
            <Title>{product.title}</Title>
            <Desc>{product.description}</Desc>
            <Rate>
                <Price>${product.price}</Price>
                <Discount>$99</Discount>
            </Rate>
            <SmallText>
                <Typography><StyledBadge />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                <Typography><StyledBadge />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                <Typography><StyledBadge />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                <Typography><StyledBadge />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
        </SmallText>
        <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </ColumnText>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} />
                        </TableCell>
                    </TableRow>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </Text>
    </Wrapper>
    </>
  )
}

export default Product