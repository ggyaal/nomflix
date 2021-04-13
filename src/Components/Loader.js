import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const Circle = styled.div`
    background-color: rgba(0, 0, 0, .3);
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    margin-top: 20px;
`;

const Bar = styled.div`
    @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    background-color: #c0392b;
    height: 100px;
    width: 30px;
    border-radius: 20px;
    transition: 0.5s;
    transform-origin: bottom;
    animation: rotate 5s infinite;
`;

export default () => (
    <Container>
        <span role="img" aria-label="Loading">
            <Circle>
                <Bar />
            </Circle>
        </span>
    </Container>
);