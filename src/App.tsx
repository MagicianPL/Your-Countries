import React, { useState } from 'react';
import AddCountryForm from './components/AddCountryForm';
import styled from 'styled-components';
import CountriesGrid from './components/CountriesGrid';

const countryListArr = [
  {
    country: "Egypt",
    rating: 5,
    description: "It was awesome!",
    imageUrl: "https://images.unsplash.com/photo-1523478482487-1eed2b3d9939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    country: "Greece",
    rating: 4,
    description: "It was nice!",
    imageUrl: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  }
];

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 3rem 10px;
  background-color: #0c0c0c;
`;


function App() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [countriesList, setCountriesList] = useState(countryListArr);

  return (
    <Wrapper>
      <AddCountryForm />
      <CountriesGrid countriesList={countriesList} />
    </Wrapper>
  );
}

export default App;
