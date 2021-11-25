import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RatingStars from './RatingStars';
import Button from './UI/Button';

const StyledCountryItem = styled.div<{imageUrl: string}>`
    width: 600px;
    max-width: 100%;
    min-height: 260px;
    margin-bottom: 30px;
    border-radius: 5px;
    position: relative;
    padding: 1rem;
    z-index: 1;

    &:before {
        content: "";
        position: absolute;
        inset: 0;
        background: url("${({imageUrl})=> imageUrl}");
        background-size: cover;
        opacity: 0.2;
        z-index: -1;
        border-radius: 5px;
        filter: blur(3px);
        transition: all 0.4s;
    }

    &:hover:before {
        filter: blur(0px);
        opacity: 0.4;
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

    .rating {
        padding: 4px;
        background-color: #000022;
        color: white;
        font-size: 14px;
        text-align: center;
        opacity: 0.5;
        position: absolute;
        top: 147px;
        width: 100%;
        left: 0;
        z-index: -1;
    }

    svg {
        color: #000022;
        filter:drop-shadow(2px 3px 4px #000011);
        transition: all 0.2s;
    }

    &:hover svg {
        filter:drop-shadow(2px 3px 5px #000011);
    }

    .currency {
        font-weight: bold;
        margin-top: 50px;
    }

    .currency span {
        font-style: italic;
    }

    button {
        position: absolute;
        bottom: 10px;
        right: 14px;
        left: auto;
    }
`;

    interface Props {
        country: string,
        description: string,
        imageUrl: string,
        rating: number,
    }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CountryItem: React.FC<Props> = ({country, description, imageUrl, rating}) => {

    const [currency, setCurrency] = useState("?");

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            const curr = Object.keys(data[0].currencies)[0];
            console.log(currency);
            setCurrency(curr);
        });
    }, [])

    return (
        <StyledCountryItem imageUrl={imageUrl}>
            <h1>{country}</h1>
            <RatingStars rating={rating} />
            <p className="rating">YOUR RATING</p>
            <p className="currency"><span>Currency: </span>{currency}</p>
            <Button>Show details</Button>
        </StyledCountryItem>
    );
};

export default CountryItem;