import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #000011;
    color: white;
    font-weight: bold;
    padding: 6px 12px;
    font-size: 24px;
    border: none;
    border-radius: 3px;
    margin-top: 15px;
    cursor: pointer;
    transition: all 0.4s;
    position: absolute;
    bottom: 40px;
    left: 14px;

    &:hover {
        background-color: #000022;
        color: gray;
    }
`;


const Button: React.FC<unknown> = ({children}) => {
    return (
        <StyledButton>{children}</StyledButton>
    );
};

export default Button;