/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from './UI/TextInput';
import Button from './UI/Button';
import Modal from './UI/Modal';

const Wrapper = styled.form`
    width: 800px;
    margin: 0 auto;
    max-width: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 20px 14px;
    min-height: 550px;
    position: relative;
`;

interface Props {
    addCountry: (country: {
        country: string,
        rating: string,
        description: string,
        imageUrl: string
    }) => void,
}

const AddCountryForm: React.FC<Props> = ({addCountry}) => {

    const initialValues = {
        country: "",
        rating: "",
        description: "",
        imageUrl: ""
    };

    const [inputValues, setInputValues] = useState(initialValues);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const updatedValue = e.target.value;

        setInputValues(
            {...inputValues,
                [e.target.name]: updatedValue,
            }
        );
    };

    const [showErrorModal, setShowErrorModal] = useState(false);

    const toggleErrorModal = () => {
        setShowErrorModal(!showErrorModal)
    };

    const formValidation = () => {
        const {country, rating, description} = inputValues;
        if (country.trim().length === 0) {
            setShowErrorModal(true);
            return;
        } else if (description.trim().length === 0) {
            setShowErrorModal(true);
            return;
        } else if (rating.trim().length === 0 || parseInt(rating) <= 0 || parseInt(rating) > 5) {
            setShowErrorModal(true);
            return;
        }
        /* If form is valid we can add country to an array */
        addCountry(inputValues);
        setInputValues(initialValues);
    };

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        formValidation();
    }


     return (
    <>
        {showErrorModal ?
        <Modal title="ERROR" content="Please enter valid informations" hideModal={toggleErrorModal} />
        :
        <Wrapper onSubmit={handleSubmitForm}>
        <TextInput id="country" label="Country" name="country" value={initialValues.country} onChange={handleInputChange} />
        <TextInput type="number" id="rating" label="Your rating (1-5)" name="rating" onChange={handleInputChange} />
        <TextInput id="description" label="Describe it!" name="description" textarea={true} value={initialValues.description} onChange={handleInputChange} />
        <TextInput id="imageUrl" label="Image URL (optional)" name="imageUrl" onChange={handleInputChange} />
        <Button type="submit">Add Country</Button>
    </Wrapper>
    } 
    </>
    )
};

export default AddCountryForm;