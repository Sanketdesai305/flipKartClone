import {React, useState } from "react";
import { ButtonGroup, Button, styled } from "@mui/material";
import {useDispatch} from 'react-redux';
import {IncrementCount} from '../../redux/cartRedux';
//Counter button that shows up in the cart page
const Component = styled(ButtonGroup)`
    margin-Right: 20%;
    margin-top: 20px;
    
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

export const GroupedButton = () => {
    const dispatch = useDispatch()
    const [ counter, setCounter ] = useState(1);

    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
        dispatch(IncrementCount())
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
    };

    return (
        <Component>
            <StyledButton onClick={() => handleDecrement()} disabled={counter === 1}>-</StyledButton>
            <Button disabled>{counter}</Button>
            <StyledButton onClick={() => handleIncrement()}>+</StyledButton>
        </Component>
    );
}

