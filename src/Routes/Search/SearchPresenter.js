import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.section``;

const Detail = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

const Button = styled.input``;

const SearchPresenter = ({
  movieResult,
  tvResult,
  searchInput,
  submittedInput,
  isLoading,
  error,
  handleSubmit,
  updateInput,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="search for movies or tv shows"
        value={searchInput}
        onChange={updateInput}
      />
      <Button type="button" value="Search" onClick={handleSubmit} />
    </Form>
    {isLoading ? (
      "loading..."
    ) : (
      <>
        {movieResult && movieResult.length > 0 && (
          <>
            <h2>Showing results for "{submittedInput}"</h2>
            <Section title="Results on movies">
              {movieResult.map((movie) => (
                <Detail key={movie.id}>
                  <div>{movie.poster_path}</div>
                  <span>{movie.title}</span>
                  <div>
                    {movie.vote_average && movie.vote_average > 5 ? (
                      <span role="img" aria-label="good">
                        😇
                      </span>
                    ) : (
                      <span role="img" aria-label="bad">
                        🤬
                      </span>
                    )}
                    {movie.vote_average}/10
                  </div>
                </Detail>
              ))}
            </Section>
          </>
        )}
        {tvResult && tvResult.length > 0 && (
          <Section title="Results on tv shows">
            {tvResult.map((tv) => (
              <Detail key={tv.id}>
                <div>{tv.poster_path}</div>
                <span>{tv.name}</span>
                <div>
                  {tv.vote_average && tv.vote_average > 5 ? (
                    <span role="img" aria-label="good">
                      😇
                    </span>
                  ) : (
                    <span role="img" aria-label="bad">
                      🤬
                    </span>
                  )}
                  {tv.vote_average}/10
                </div>
              </Detail>
            ))}
          </Section>
        )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  searchInput: PropTypes.string,
  submittedInput: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired,
};

export default SearchPresenter;
