import React from 'react';
import styled from 'styled-components';

const StyledCountryItem = styled.div`
    width: 600px;
    max-width: 100%;
    min-height: 260px;
    margin: 30px 0 0 30px;
    border-radius: 5px;
    position: relative;
    padding: 1rem;
    z-index: 1;

    &:before {
        content: "";
        position: absolute;
        inset: 0;
        background: url("https://images.unsplash.com/photo-1523478482487-1eed2b3d9939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
        background-size: cover;
        opacity: 0.2;
        z-index: -1;
        border-radius: 5px;
    }

    &:after {
        content: "";
        position: absolute;
        inset: 0;
        background: white;
        z-index: -2;
        border-radius: 5px;
    }

    h1 {
        text-transform: uppercase;
        padding-bottom: 10px;
        border-bottom: 3px solid #000011;
    }
`;


const CountryItem = () => {
    return (
        <StyledCountryItem>
            <h1>Egypt</h1>
        </StyledCountryItem>
    );
};

export default CountryItem;