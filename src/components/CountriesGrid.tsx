import React from 'react';
import CountryItem from './CountryItem';
import styled from 'styled-components';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    width: 100%;
    max-width: 1400px;
    margin-top: 30px;
`;

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
        <StyledGrid>
            {countriesList.map(country => {
               return (<CountryItem key={country.description} {...country} />)
            })}
        </StyledGrid>
    )
};

export default CountriesGrid;