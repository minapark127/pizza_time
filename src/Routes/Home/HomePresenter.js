import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section``;

const HomePresenter = ({ trendingAll, isLoading, error }) =>
  isLoading ? (
    "loading..."
  ) : (
    <Container>
      {trendingAll && trendingAll.length > 0 && (
        <>
          <div>{trendingAll[0].backdrop_path}</div>
          <div>{trendingAll[0].name}</div>
          <div>{trendingAll[0].id}</div>
          <div>{trendingAll[0].media_type}</div>
          <Link
            to={{
              pathname: `/${trendingAll[0].media_type}/${trendingAll[0].id}`,
            }}
          >
            view more
          </Link>
        </>
      )}
      <Link to="/movie">Browse movies</Link>
      <Link to="/tv">Browse tv shows</Link>
    </Container>
  );

HomePresenter.propTypes = {
  trendingAll: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
