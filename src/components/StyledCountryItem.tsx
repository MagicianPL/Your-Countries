import styled from 'styled-components';

const StyledCountryItem = styled.div<{imageUrl: string}>`
    width: 100%;
    max-width: 600px;
    min-height: 260px;
    margin-bottom: 30px;
    border-radius: 5px;
    position: relative;
    padding: 1rem;
    z-index: 1;

    @media (max-width: 330px) {
        & {
            min-height: 285px;
        }
    }

    &:before {
        content: "";
        position: absolute;
        inset: 0;
        background: url("${(props) => props.imageUrl ? props.imageUrl : 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}");
        background-size: cover;
        opacity: 0.2;
        z-index: -1;
        border-radius: 5px;
        filter: blur(3px);
        transition: all 0.4s;
    }

    &:hover:before {
        filter: blur(0px);
        opacity: 0.4;
    }

    &:after {
        content: "";
        position: absolute;
        inset: 0;
        background: white;
        z-index: -2;
        border-radius: 5px;
    }

    h1 {
        text-transform: uppercase;
        padding-bottom: 10px;
        border-bottom: 3px solid #000011;
    }

    .rating {
        padding: 4px;
        background-color: #000022;
        color: white;
        font-size: 14px;
        text-align: center;
        opacity: 0.5;
        position: absolute;
        top: 147px;
        width: 100%;
        left: 0;
        z-index: -1;
        }

        @media (max-width: 330px) {
            .rating {
                margin-top: 8px;
            }
    }

    svg {
        color: #000022;
        filter:drop-shadow(2px 3px 4px #000011);
        transition: all 0.2s;
    }

    &:hover svg {
        filter:drop-shadow(2px 3px 5px #000011);
    }

    .currency {
        font-weight: bold;
        margin-top: 50px;
    }

    @media (max-width: 330px) {
        .currency {
            margin-top: 58px;
        }

    .currency span {
        font-style: italic;
    }
`;

export default StyledCountryItem;