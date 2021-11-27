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

    /* For ShowCountryDetails Component */
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    useEffect(()=>{
        fetchCountryData(country, setCurrency, setCapital, setContinent, setFlagUrl, setPopulation);
    }, []);

    return (
        <>
        <StyledCountryItem imageUrl={imageUrl}>
            <h1>{country}</h1>
            <RatingStars rating={rating} />
            <p className="rating">YOUR RATING</p>
            <p className="currency"><span>Currency: </span>{currency}</p>
            <Button onClick={toggleDetails}>Show details</Button>
        </StyledCountryItem>
        {showDetails ?
        <ShowCountryDetails background={imageUrl} country={country} flagUrl={flagUrl} rating={rating} description={description} capital={capital} currency={currency} population={population} continent={continent} hideDetails={toggleDetails} />
        : null}
        </>
    );
};

export default CountryItem;