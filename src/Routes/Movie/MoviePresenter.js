import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.section``;

const Detail = styled.div``;

const MoviePresenter = ({ nowPlaying, topRated, upcoming, isLoading, error }) =>
  isLoading ? (
    "loading..."
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <Detail key={movie.id}>
              <div>{movie.poster_path}</div>
              <span>{movie.title}</span>
              <div>
                {movie.vote_average && movie.vote_average > 5 ? (
                  <span role="img" aria-label="good">
                    👍
                  </span>
                ) : (
                  <span role="img" aria-label="bad">
                    👎
                  </span>
                )}
                {movie.vote_average}/10
              </div>
            </Detail>
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map((movie) => (
            <Detail key={movie.id}>
              <div>{movie.poster_path}</div>
              <span>{movie.title}</span>
              <div>
                {movie.vote_average && movie.vote_average > 5 ? (
                  <span role="img" aria-label="good">
                    👍
                  </span>
                ) : (
                  <span role="img" aria-label="bad">
                    👎
                  </span>
                )}
                {movie.vote_average}/10
              </div>
            </Detail>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map((movie) => (
            <Detail key={movie.id}>
              <div>{movie.poster_path}</div>
              <span>{movie.title}</span>
              <div>
                {movie.vote_average && movie.vote_average > 5 ? (
                  <span role="img" aria-label="good">
                    👍
                  </span>
                ) : (
                  <span role="img" aria-label="bad">
                    👎
                  </span>
                )}
                {movie.vote_average}/10
              </div>
            </Detail>
          ))}
        </Section>
      )}
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
