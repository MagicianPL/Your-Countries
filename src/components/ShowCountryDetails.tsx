import React from 'react';
import styled from 'styled-components';
import RatingStars from './RatingStars';
import Button from './UI/Button';

interface OverlayProps {
    background: string
}

const StyledOverlay = styled.div<OverlayProps>`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    z-index: 10;

    &:before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url("${(props) => props.background ? props.background : 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}");
        background-size: cover;
        background-position: center;
    }

    .wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
`;

const StyledDetailsInfo = styled.div`
    width: 1000px;
    max-width: 90%;
    background: white;
    border-radius: 5px;
    padding: 1rem;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);

    header {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
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

    img {
        width: 100%;
        max-width: 250px;
    }

    ul {
        padding-left: 60px;
        font-size: 20px;
    }

    @media (max-width: 370px) {
        ul {
            padding-left: 20px;
        }
    }

    @media (max-width: 550px) {
        ul {
            margin-top: 20px;
        }
    }

    li {
        margin-bottom: 10px;
    }

    li span {
        font-weight: bold;
        margin-right: 10px;
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
    capital: string
    currency: string
    continent: string
    population: string
    hideDetails: () => void
}

const ShowCountryDetails: React.FC<Props> = ({background, country, flagUrl, rating, description, capital, currency, continent, population, hideDetails}) => {
    return (
   
        <StyledOverlay background={background} onClick={hideDetails}>
            <div className="wrapper">
            <StyledDetailsInfo>
                <header>
                    <h1>{country}</h1>
                    <img src={flagUrl} alt={`flag of ${country}`} />
                </header>
                <ul>
                    <li><span>Capital:</span> {capital}</li>
                    <li><span>Currency:</span> {currency}</li>
                    <li><span>Continent:</span> {continent}</li>
                    <li><span>Population:</span> {population}</li>
                </ul>
                <RatingStars rating={rating} />
                <p>{description}</p>
                <Button className="hideDetails">BACK</Button>
            </StyledDetailsInfo>
            </div>
        </StyledOverlay>
      
    );
};

export default ShowCountryDetails;