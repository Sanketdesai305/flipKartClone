import {useSelector} from 'react-redux';
import { Box, Typography, styled } from '@mui/material';
const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

const Price = styled(Typography)`
    float: right;
`;

const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
    font-size: 16px; 
    color: green;
`;

//this component appears on the right side of cart page
export const TotalView = () => {
    const cart = useSelector(state=>state.cart)
//this part is static shows total amount in the cart

    return (
        <Box>  {/* className={classes.component}> */}
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>Price 
                    <Price component="span">₹{cart.total}</Price>
                </Typography>
                <Typography>Discount
                    <Price component="span">-₹33</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">₹33</Price>
                </Typography>
                <TotalAmount>Total Amount
                    <Price>₹{cart.total}</Price>
                </TotalAmount>
                <Discount>You will save ₹66 on this order</Discount>
            </Container>
        </Box>
    )
}

