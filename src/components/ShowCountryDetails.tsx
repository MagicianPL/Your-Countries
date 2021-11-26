import React from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: gray;
    z-index: 10;
`;

const StyledDetailsInfo = styled.div`
    width: 700px;
    height: 500px;
    background: white;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
`;

const ShowCountryDetails = () => {
    return (
   
        <StyledOverlay>
            <StyledDetailsInfo />
        </StyledOverlay>
      
    );
};

export default ShowCountryDetails;