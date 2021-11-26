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

    &.show-form {
        color: black;
        background: white;
        position: static;
        display: block;
        margin: 0 auto 20px auto;
    }

    &.hideDetails {
        position: static;
        display: block;
        margin: 20px auto;
    }
`;

interface Props {
    children: unknown,
    type?: "button" | "submit",
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({children, type, className, onClick}) => {
    return (
        <StyledButton onClick={onClick} className={className} type={type}>{children}</StyledButton>
    );
};

export default Button;