import styled from 'styled-components';

const LoadingAnimation = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100px;
    margin-top: 0.5rem;
    @keyframes loading {
        from {
            opacity: 100%;
        }
        to {
            opacity: 0%;
        }
    }
    & div {
        content: '';
        height: 10px;
        width: 10px;
        background-color: black;
        border-radius: 50%;
    }
    & .one {
        animation: 1s infinite alternate loading;
    }
    & .two {
        animation: 1s infinite alternate loading;
        animation-delay: 0.5s;
    }
    & .three {
        animation: 1s infinite alternate loading;
        animation-delay: 1s;
    }
`;

const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`;

const Loading = () => {
    return(
        <LoadingContainer>
            <LoadingAnimation>
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
            </LoadingAnimation>
        </LoadingContainer>
    )
};

export default Loading;