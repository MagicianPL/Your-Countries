import React from 'react';
import styled from 'styled-components';
import TextInput from './UI/TextInput';

const Wrapper = styled.div`
    display: flex;
    width: 800px;
    height: 300px;
    margin: 0 auto;
    max-width: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 20px 14px;
`;


const AddCountryForm = () => {
     return (
        <Wrapper>
            <TextInput id="country" label="Country" />
        </Wrapper>
    )
};

export default AddCountryForm;