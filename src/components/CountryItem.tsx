import React, { useState, useEffect } from 'react';
import StyledCountryItem from './StyledCountryItem';
import { fetchCountryData } from '../helpers/fetchningCountryData';
import RatingStars from './RatingStars';
import Button from './UI/Button';


    interface Props {
        country: string,
        description: string,
        imageUrl: string,
        rating: string,
    }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CountryItem: React.FC<Props> = ({country, description, imageUrl, rating}) => {

    const [currency, setCurrency] = useState("?");

    useEffect(()=>{
        fetchCountryData(country, setCurrency);
    }, []);
    
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