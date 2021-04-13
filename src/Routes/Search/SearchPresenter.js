import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';
import { Helmet } from 'react-helmet';

const Container = styled.div`
    padding: 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, handleSubmit, updateTerm, loading, error }) => 
    (
        <Container>
            <Helmet>
                <title>Search | Nomflex</title>
            </Helmet>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Search Movies or TV Shows..." onChange={updateTerm} value={searchTerm}/>
            </Form>
            { loading ? <Loader /> : (
                <>
                    {movieResults && movieResults.length > 0 && (
                        <Section title="Movie results">
                            {movieResults.map(movie => (
                                    <Poster 
                                        key={movie.id}
                                        id={movie.id}
                                        imageUrl={movie.poster_path}
                                        title={movie.title}
                                        rating={movie.vote_average}
                                        year={movie.release_date && movie.release_date.substring(0, 4)}
                                        isMovie={true}
                                    />
                                )
                            )}
                        </Section>
                    )}
                    {tvResults && tvResults.length > 0 && (
                        <Section title="TV Show results">
                            {tvResults.map(show => (
                                    <Poster 
                                        key={show.id}
                                        id={show.id}
                                        imageUrl={show.poster_path}
                                        title={show.name}
                                        rating={show.vote_average}
                                        year={show.first_air_date && show.first_air_date.substring(0, 4)}
                                    />
                                )
                            )}
                        </Section>
                    )}
                    {error && (
                        <Message color="#e74c3c" text={error} />
                    )}
                    {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (
                        <Message color="#bdc3c7" text="Noting Found" />
                    )}
                </>
            )}
        </Container>
    );

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    airingToday: PropTypes.array,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default SearchPresenter;