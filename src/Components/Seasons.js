import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Seasons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Season = styled.div`
    margin-right: 10px;
`;

const SeasonImg = styled.div`
    background-image: url(${props => props.img? `https://image.tmdb.org/t/p/original/${props.img}`: require("../assets/noImage.png").default});
    background-position: center center;
    background-size: cover;
    width: 150px;
    height: 230px;
    border-radius: 10px;
`;

const Texts = styled.div`
    margin: 10px 0;
`;

const Name = styled.div`
    font-size: 17px;
    font-weight: 600;
`;

const Date = styled.div`
    margin-top: 5px;
    color: rgba(255, 255, 255, .7);
`;

export default ({ seasons }) => (
    <Container>
        <Seasons>
            {seasons.map(season => (
                <Season>
                    <SeasonImg img={season.poster_path}></SeasonImg>
                    <Texts>
                        <Name>{season.name}</Name>
                        <Date>{season.air_date}</Date>
                    </Texts>
                </Season>
            ))}
        </Seasons>
    </Container>
)