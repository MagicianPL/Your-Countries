import React from 'react';
import styled from 'styled-components';
import RatingStars from './RatingStars';

interface OverlayProps {
    background: string
}

const StyledOverlay = styled.div<OverlayProps>`
    position: fixed;
    inset: 0;
    z-index: 10;

    &:before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url("${({background}) => background}");
        background-size: cover;
        background-position: center;
        opacity: 0.8;
    }
`;

const StyledDetailsInfo = styled.div`
    width: 1000px;
    max-width: 90%;
    min-height: 300px;
    background: white;
    border-radius: 5px;
    padding: 1rem;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);

    header {
        display: flex;
    }

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 55px;
        text-align: center;
        flex: 1;
        margin-bottom: 22px;
    }

    svg {
        color: #000022;
        filter:drop-shadow(2px 3px 4px #000011);
        transition: all 0.2s;
    }

     svg:hover {
        filter:drop-shadow(2px 3px 5px #000011);
    }

    p {
        width: 100%;
        max-width: 700px;
        text-align: center;
        margin: 40px auto;
        padding: 0 0.5rem;
        font-size: 25px;
        text-shadow: 0px 2px 3px rgba(0,0,0,0.5);
    }
`;

interface Props {
    background: string,
    country: string,
    flagUrl: string,
    rating: string,
    description: string,
}

const ShowCountryDetails: React.FC<Props> = ({background, country, flagUrl, rating, description}) => {
    return (
   
        <StyledOverlay background={background}>
            <StyledDetailsInfo>
                <header>
                    <h1>{country}</h1>
                    <img src={flagUrl} alt={`flag of ${country}`} />
                </header>
                <RatingStars rating={rating} />
                <p>{description}</p>

            </StyledDetailsInfo>
        </StyledOverlay>
      
    );
};

export default ShowCountryDetails;