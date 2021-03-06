import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const star = <FontAwesomeIcon icon={faStar} />;

interface Props {
    rating: string,
}

const StyledRating = styled.div<Props>`
    width: 100%;
    padding: 0 8px;
    display: flex;
    justify-content: space-around;
    margin-top: 1.8rem;
    font-size: 40px;
`;

const RatingStars: React.FC<Props> = ({rating}) => {

    return (
        <StyledRating rating={rating}>
            {   
                Array(parseInt(rating)).fill(null).map(() => <span key={Math.random()}>{star}</span>)
            }
        </StyledRating>
    );
};

export default RatingStars;