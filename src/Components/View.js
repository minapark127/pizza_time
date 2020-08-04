import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section``;

const Poster = styled.figure`
  width: 100%;
  height: 210px;
  background-image: url(${(props) => props.bgUrl});
  background-position: center;
  background-size: cover;
  transition: transform 0.3s linear;
`;
const Rating = styled.div`
  letter-spacing: 1.3px;
  position: absolute;
  bottom: 10px;
  right: 5px;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s linear;
`;
const ImgContainer = styled.div`
  margin-bottom: 5px;
  &:hover {
    ${Poster} {
      opacity: 0.4;
      transform: scale(1.05);
    }

    ${Rating} {
      opacity: 1;
    }
  }
  overflow: hidden;
  position: relative;
  box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h3`
  font-weight: 600;
  line-height: 1.2rem;
`;
const Year = styled.span`
  opacity: 0.8;
  font-size: 14px;
`;

const View = ({ id, rating, year, imgUrl, title, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImgContainer>
        <Poster
          bgUrl={
            imgUrl
              ? `https://image.tmdb.org/t/p/w300${imgUrl}`
              : require("../assets/noPoster.png")
          }
        />

        <Rating>
          {rating > 5 ? (
            <span role="img" aria-label="recommend">
              😇
            </span>
          ) : (
            <span role="img" aria-label="bad">
              🤬
            </span>
          )}
          {rating}/10
        </Rating>
      </ImgContainer>
      <Title>
        {" "}
        {title.length > 14 ? `${title.substring(0, 14)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

View.propTypes = {
  id: PropTypes.number.isRequired,
  isMovie: PropTypes.bool.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default View;
