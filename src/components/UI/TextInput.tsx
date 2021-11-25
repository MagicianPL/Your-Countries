import React from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    min-height: 80px;

    * {
        width: 100%;
        font-size: 24px;
    }

    label {
        font-weight: bold;
        margin-bottom: 0.8rem;
       
    }

    input, textarea {
        border: 1px solid gray;
        border-radius: 2px;
        transition: border, background-color 0.8s;
        padding: 3px 8px;
    }

    input:hover, textarea:hover {
        border: 1px solid #0000d9;
    }

    input:focus, textarea:focus {
        outline: 2px solid #000022;
        border: none;
        background-color: #e5e5f6;
    }
`;

interface Props{
    id: string,
    label: string,
    textarea?: boolean;
    type?: string;
}

const TextInput: React.FC<Props> = ({id, label, textarea, type="text"}) => {
    return (
        <StyledBlock>
            <label htmlFor={id}>{label}</label>
            {
                !textarea ? 
                <input type={type} id={id} />
                :
                <textarea id={id} />
            } 
        </StyledBlock>
    );
};

export default TextInput;