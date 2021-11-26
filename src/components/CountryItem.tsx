import React, { useState, useEffect } from 'react';
import StyledCountryItem from './StyledCountryItem';
import { fetchCountryData } from '../helpers/fetchningCountryData';
import RatingStars from './RatingStars';
import Button from './UI/Button';
import ShowCountryDetails from './ShowCountryDetails';


    interface Props {
        country: string,
        description: string,
        imageUrl: string,
        rating: string,
    }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CountryItem: React.FC<Props> = ({country, description, imageUrl, rating}) => {

    /* All data about country. It will be set on fetching */
    const [currency, setCurrency] = useState("?");
    const [capital, setCapital] = useState("");
    const [continent, setContinent] = useState("");
    const [flagUrl, setFlagUrl] = useState("");
    const [population, setPopulation] = useState("");

    useEffect(()=>{
        fetchCountryData(country, setCurrency, setCapital, setContinent, setFlagUrl, setPopulation);
    }, []);
    
    setTimeout(()=>{
        console.log(currency, capital, continent, flagUrl, population)
    }, 5000);

    return (
        <>
        <StyledCountryItem imageUrl={imageUrl}>
            <h1>{country}</h1>
            <RatingStars rating={rating} />
            <p className="rating">YOUR RATING</p>
            <p className="currency"><span>Currency: </span>{currency}</p>
            <Button>Show details</Button>
        </StyledCountryItem>
        <ShowCountryDetails background={imageUrl} country={country} flagUrl={flagUrl} rating={rating} description={description} />
        </>
    );
};

export default CountryItem;