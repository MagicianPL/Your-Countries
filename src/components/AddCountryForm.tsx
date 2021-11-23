import React from 'react';
import styled from 'styled-components';
import TextInput from './UI/TextInput';

const Wrapper = styled.div`
    width: 800px;
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
            <TextInput id="rating" label="Your rating (1-5)" />
            <TextInput id="description" label="Describe it!" textarea={true} />
        </Wrapper>
    )
};

export default AddCountryForm;