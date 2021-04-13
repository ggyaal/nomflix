import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import { Link, Route } from 'react-router-dom';
import MenuBar from 'Components/MenuBar';
import Overview from 'Components/Overview';
import Videos from 'Components/Videos';
import Actors from 'Components/Actors';
import Seasons from 'Components/Seasons';

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(2px);
    opacity: .5;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`;

const Cover = styled.div`
    @media only screen and (min-width: 800px) {
        display: block;
    }
    width: 30%;
    height: 90%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    border-radius: 5px;
    display: none;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const IMDB = styled.span`
    margin-left: 10px;
    padding: 5px;
    border: 1px solid black;
    color: black;
    font-weight: 600;
    border-radius: 5px;
    background: linear-gradient(0deg, #886f0b 0%, #deb100 50%, #fadf75 75%, #f1c40f 100%);
`;

const Homepage = styled.span`
    margin-left: 10px;
    padding: 5px;
    border: 1px solid black;
    color: black;
    font-weight: 600;
    border-radius: 5px;
    background: linear-gradient(0deg, #1a6891 0%, #2aa0d2 15%, #98d3eb 70%, #2aa0d2 100%);
`;

const More = styled.div`
    width: 80%;
`;

const DetailPresenter = ({ result, loading, error }) => (
    loading ? <Loader /> : (
        <Container>
            <Backdrop
                bgImage={result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : require("../../assets/noImage.png").default}
            />
            <Content>
                <Cover
                    bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/noImage.png").default}
                />
                <Data>
                    <Title>
                        {result.title ? result.title : result.name}
                    </Title>
                    <ItemContainer>
                        <Item>{result.release_date ?
                            result.release_date.substring(0, 4)
                            : result.first_air_date.substring(0, 4)
                        }</Item>
                        <Divider>●</Divider>
                        <Item>{result.runtime ?
                            result.runtime
                            : result.episode_run_time[0]
                        } 분</Item>
                        <Divider>●</Divider>
                        <Item>{
                            result.genres.map((genre, idx) =>
                                idx === result.genres.length - 1 ?
                                    genre.name :
                                    `${genre.name} / `
                            )
                        }
                        </Item>
                        {(result.imdb_id && result.imdb_id.length > 0)? (
                            <Item>
                                <IMDB>
                                    <a href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank">IMDB</a>
                                </IMDB>
                            </Item>
                        ): null}
                        {(result.homepage && result.homepage.length > 0)? (
                            <Item>
                                <Homepage>
                                    <a href={result.homepage} target="_blank">HOMEPAGE</a>
                                </Homepage>
                            </Item>
                        ): null}

                    </ItemContainer>
                    <MenuBar />
                    <More>
                        <Route path="/:kind/:id/overview" component={() => <Overview overview={result.overview} companies={result.production_companies} />} />
                        <Route path="/:kind/:id/videos" component={() => <Videos videos={result.videos.results} />} />
                        <Route path="/:kind/:id/actors" component={() => <Actors cast={result.credits.cast} />} />
                        <Route path="/:kind/:id/seasons" component={() => <Seasons seasons={result.seasons} />} />
                    </More>
                </Data>
            </Content>
        </Container>
    )
);

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;