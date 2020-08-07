import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import View from "Components/View";

const Container = styled.section`
  width: 97vw;
  margin: 0 auto;
  margin-top: 30px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  all: unset;
  width: 300px;
  border-bottom: 1px solid #f0e2dc;
  padding: 10px;
  :focus {
    border-bottom: 1px solid #f51406;
  }
`;

const Button = styled.input`
  all: unset;
  margin-left: 20px;
  background-color: rgba(245, 20, 6, 0.8);
  color: #f0e2dc;
  border-radius: 7px;
  padding: 10px 15px;
  box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.35);
  transition: transform 1s linear;
  :hover {
    cursor: pointer;
    background-color: rgba(245, 20, 6, 0.6);
  }
  :active {
    transform: scale(0.8);
  }
`;

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
        autoFocus
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
