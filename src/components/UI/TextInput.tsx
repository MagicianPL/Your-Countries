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

    input:hover {
        border: 1px solid #0000d9;
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