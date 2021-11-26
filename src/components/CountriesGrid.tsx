import React from 'react';
import CountryItem from './CountryItem';
import ShowCountryDetails from './ShowCountryDetails';
import styled from 'styled-components';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    width: 100%;
    max-width: 1400px;
    margin: 30px auto 0 auto;

    @media (max-width: 1280px) {
        grid-template-columns: 1fr;
    }
`;

interface Props {
    countriesList: {
        country: string;
        rating: string;
        description: string;
        imageUrl: string;
    }[],
}

const CountriesGrid: React.FC<Props> = ({countriesList}) => {

    return (
     <>
        <ShowCountryDetails />
        <StyledGrid>
            {countriesList.map(country => {
               return (<CountryItem key={country.description} {...country} />)
            })}
        </StyledGrid>
    </>
    )
};

export default CountriesGrid;