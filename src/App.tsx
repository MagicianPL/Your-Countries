import React, { useState } from 'react';
import AddCountryForm from './components/AddCountryForm';
import styled from 'styled-components';
import Button from './components/UI/Button';
import CountriesGrid from './components/CountriesGrid';

const countryListArr = [
  {
    country: "Egypt",
    rating: "5",
    description: "It was awesome!",
    imageUrl: "https://images.unsplash.com/photo-1523478482487-1eed2b3d9939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    country: "Greece",
    rating: "4",
    description: "It was nice!",
    imageUrl: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    country: "Japan",
    rating: "1",
    description: "It was terrible!",
    imageUrl: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    country: "France",
    rating: "3",
    description: "It was weird!",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
  },
];

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 10px;
  background-color: #0c0c0c;
`;



function App() {

  const [countriesList, setCountriesList] = useState(countryListArr);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const addCountry = (newCountry) => {
    setCountriesList([newCountry, ...countriesList])
    toggleForm();
  };

  return (
    <Wrapper>
      <Button onClick={toggleForm} className="show-form">{showForm ? "Hide" : "Add country"}</Button>
      {showForm && <AddCountryForm addCountry={addCountry} />}
      <CountriesGrid countriesList={countriesList} />
    </Wrapper>
  );
}

export default App;
