import React from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    * {
        width: 100%;
        font-size: 24px;
    }

    label {
        font-weight: bold;
        margin-bottom: 0.8rem;
    }

    input {
        border: 1px solid gray;
        border-radius: 2px;
        transition: border 0.3s;
        padding: 3px 8px;
    }

    input:hover {
        border: 1px solid #0000d9;
    }

    input:focus {
        outline: 2px solid #0000ae;
        border: none;
        background-color: #e5e5f6;
    }
`;

interface Props{
    id: string,
    label: string,
}

const TextInput: React.FC<Props> = ({id, label}) => {
    return (
        <StyledBlock>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} />
        </StyledBlock>
    );
};

export default TextInput;