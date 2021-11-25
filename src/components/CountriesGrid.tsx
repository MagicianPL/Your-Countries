import React from 'react';
import CountryItem from './CountryItem';

interface Props {
    countriesList: {
        country: string;
        rating: number;
        description: string;
        imageUrl: string;
    }[],
}

const CountriesGrid: React.FC<Props> = ({countriesList}) => {
    return (
        <div>
            {countriesList.map(country => {
               return (<CountryItem key={country.description} {...country} />)
            })}
        </div>
    )
};

export default CountriesGrid;