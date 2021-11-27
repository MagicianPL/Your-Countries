import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledModalOverlay = styled.div`
    width: 100%;
    height: 100%;
    inset: 0;
    position: fixed;
    background-color: #262626;
    z-index: 10;

    .relative-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        overscroll-y: auto;
    }
`;

const StyledModal = styled.div`
    position: absolute;
    width: 90%;
    max-width: 1000px;
    background: white;
    border-radius: 5px;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);

    h1 {
        padding: 15px 8px;
        border-radius: 0 0 5px 5px;
        background-color: #000011;
        color: white;
        font-weight: bold;
        text-align: center;
        letter-spacing: 4px;
        margin-bottom: 40px;
    }

    p {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        color: red;
        font-size: 24px;
        margin-bottom: 40px;
    }
`

const Modal = () => {
    return (
        <StyledModalOverlay>
            <div className="relative-wrapper">
                <StyledModal>
                    <header>
                        <h1>ERROR</h1>
                    </header>
                    <p>ncdncdcncfncifncfnvfnvfnvuf</p>
                    <footer>
                        <Button className="hideDetails">OK</Button>
                    </footer>
                </StyledModal>
            </div>
        </StyledModalOverlay>
    );
};

export default Modal;