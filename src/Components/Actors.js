import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 600px;
    overflow-y: auto;
    ::-webkit-scrollbar { width: 5.2px; }
    ::-webkit-scrollbar-track { background-color: rgba(0, 0, 0, .5); border-radius: 10px; }
    ::-webkit-scrollbar-thumb {
        background-color: #e74c3c;
        border-radius: 10px;
        :hover { background-color: #c0392b; }
        :active { background-color: #d35400; }
    }
    ::-webkit-scrollbar-button { display: none; }
`;

const Actors = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ActorDiv = styled.div`
    width: 150px;
    margin-right: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`;

const ActorImg = styled.div`
    border-radius: 10px;
    background-image: url(${props => props.img? `https://image.tmdb.org/t/p/w300${props.img}` : require("../assets/noImage.png").default});
    background-position: center center;
    background-size: cover;
    width: 130px;
    height: 150px;
`;

const Texts = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
`;

const Name = styled.div`
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 5px;
    text-align: center;
`;

const RealName = styled.div`
    color: rgba(255, 225, 255, .7);
`;

const Actor = ({actor}) => (
    <ActorDiv>
        <ActorImg img={actor.profile_path} />
        <Texts>
            <Name>{actor.character}</Name>
            <RealName>{actor.name}</RealName>
        </Texts>
    </ActorDiv>
)

export default ({ cast }) => (
    <Container>
        <Actors>
        {cast.map(actor => <Actor key={actor.id} actor={actor} />)}
        </Actors>
    </Container>
)