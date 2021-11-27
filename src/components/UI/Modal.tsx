import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledModalOverlay = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    position: fixed;
    background-color: black;
    opacity: 0.5;

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
        padding: 8px 5px;
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