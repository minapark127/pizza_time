import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  background-image: url(${(props) => props.bgUrl});
  background-position: center;
  background-size: cover;
  opacity: 0.4;
  z-index: 0;
`;
const Container = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    all: unset;
    margin-left: 20px;
    background-color: rgba(245, 20, 6, 0.9);
    color: #f0e2dc;
    border-radius: 10px;
    padding: 15px 35px;
    box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.35);
    transition: transform 0.5s linear;
    :hover {
      cursor: pointer;
      background-color: rgba(245, 20, 6, 0.7);
    }
    :active {
      transform: scale(0.8);
    }
  }
`;
const Welcome = styled.h2`
  text-transform: uppercase;
  font-size: 50px;
  margin-bottom: 20px;
  span {
    text-shadow: 2.5px 2.5px 10px rgba(200, 200, 200, 1),
      -3px -3px 10px rgba(200, 200, 200, 1);
  }
`;
const Title = styled.h2`
  width: 80%;
  line-height: 1.2;
  font-size: 70px;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 15px;
`;
const More = styled(Link)`
  margin-bottom: 20px;
`;
const Buttons = styled.section`
  input {
    background-color: rgba(240, 226, 220, 0.95);
    color: #3c3f42;
    :hover {
      background-color: rgba(240, 226, 220, 0.7);
    }
  }
`;

const Landing = ({ title, isMovie, id, backdropPath }) => (
  <>
    <Backdrop bgUrl={`https://image.tmdb.org/t/p/original${backdropPath}`} />
    <Container>
      <Welcome>
        <span role="img" aria-label="pizza">
          🍕
        </span>
      </Welcome>
      <Title>{title}</Title>
      <More to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
        <input type="button" value="view more" />
      </More>
      <Buttons>
        <Link to={`/movie`}>
          <input type="button" value="▶ see Movies" />
        </Link>
        <Link to={`/tv`}>
          <input type="button" value="▶ see TVs" />
        </Link>
      </Buttons>
    </Container>
  </>
);

Landing.propTypes = {
  title: PropTypes.string.isRequired,
  isMovie: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  backdropPath: PropTypes.string.isRequired,
};
export default Landing;
