import React from 'react';
import AddCountryForm from './components/AddCountryForm';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  padding: 3rem 10px;
  background-color: #0c0c0c;
`;


function App() {
  return (
    <Wrapper>
      <AddCountryForm />
      </Wrapper>
  );
}

export default App;
