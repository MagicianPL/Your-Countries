import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const star = <FontAwesomeIcon icon={faStar} />;

const StyledRating = styled.div`
    width: 100%;
    padding: 0 8px;
    display: flex;
    justify-content: space-around;
    margin-top: 1.8rem;
    font-size: 40px;
`;

const RatingStars = () => {
    return (
        <StyledRating>
            {star}{star}{star}{star}{star}
        </StyledRating>
    );
};

export default RatingStars;