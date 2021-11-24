import React from 'react';
import AddCountryForm from './components/AddCountryForm';
import CountryItem from './components/CountryItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 3rem 10px;
  background-color: #0c0c0c;
`;


function App() {
  return (
    <Wrapper>
      <AddCountryForm />
      <CountryItem />
    </Wrapper>
  );
}

export default App;
