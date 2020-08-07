import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import View from "Components/View";
import Message from "../../Components/Message";

const Container = styled.section``;

const MoviePresenter = ({ nowPlaying, topRated, upcoming, isLoading, error }) =>
  isLoading ? (
    "loading..."
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <View
              key={movie.id}
              id={movie.id}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
              imgUrl={movie.poster_path}
              title={movie.title}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map((movie) => (
            <View
              key={movie.id}
              id={movie.id}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
              imgUrl={movie.poster_path}
              title={movie.title}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map((movie) => (
            <View
              key={movie.id}
              id={movie.id}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
              imgUrl={movie.poster_path}
              title={movie.title}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#f51406" text={error} />}
    </Container>
  );

MoviePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  topRated: PropTypes.array,
  upcoming: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default MoviePresenter;
