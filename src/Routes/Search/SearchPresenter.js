import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import View from "Components/View";

const Container = styled.section``;

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
                <View
                  key={movie.id}
                  id={movie.id}
                  rating={movie.vote_average}
                  year={
                    movie.release_date ? movie.release_date.substring(0, 4) : ""
                  }
                  imgUrl={movie.poster_path}
                  title={movie.title}
                  isMovie={true}
                />
              ))}
            </Section>
          </>
        )}
        {tvResult && tvResult.length > 0 && (
          <Section title="Results on tv shows">
            {tvResult.map((tv) => (
              <View
                key={tv.id}
                id={tv.id}
                rating={tv.vote_average}
                year={tv.first_air_date.substring(0, 4)}
                imgUrl={tv.poster_path}
                title={tv.name}
                isMovie={false}
              />
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
