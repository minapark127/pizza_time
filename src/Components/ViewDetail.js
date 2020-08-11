import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0%;
  left: 0%;
  background-image: url(${(props) => props.bgUrl});
  background-position: center;
  background-size: cover;
  opacity: 0.3;
  filter: blur(5px);
  z-index: 0;
`;
const Content = styled.div`
  z-index: 1;
  width: 100%;
  /* height: 100%; */
  position: relative;
  margin-bottom: 20px;
`;
const Grid = styled.div`
  display: grid;
  /* grid-auto-rows: 50vh; */
  grid-template-columns: 1fr 1.8fr;
  column-gap: 100px;
`;
const Poster = styled.img`
  justify-self: end;
  align-self: center;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 35px;
  margin-bottom: 15px;
`;
const Genres = styled.ul`
  display: flex;
  li {
    margin-right: 5px;
  }
  opacity: 0.8;
  margin-bottom: 8px;
  font-size: 0.9rem;
`;

const Misc = styled.ul`
  display: flex;
  margin-bottom: 30px;
`;
const Item = styled.li`
  margin-right: 10px;
`;
const Overview = styled.div`
  margin-bottom: 70px;
  span {
    font-size: 0.95rem;
    text-transform: uppercase;
  }
`;
const P = styled.p`
  font-size: 18px;
  margin-top: 15px;
  width: 70%;
  line-height: 1.5rem;
`;

const ViewDetail = ({
  backdropPath,
  poster_path,
  original_title,
  original_name,
  genres,
  release_date,
  first_air_date,
  runtime,
  episode_run_time,
  vote_average,
  imdb_id,
  overview,
}) => (
  <>
    <Backdrop bgUrl={`https://image.tmdb.org/t/p/original${backdropPath}`} />
    <Content>
      <Grid>
        <Poster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : require("assets/noPoster.png")
          }
          alt={`poster for ${original_title ? original_title : original_name}`}
          title={original_title ? original_title : original_name}
        />
        <Info>
          <Title>{original_title ? original_title : original_name}</Title>
          <Genres>
            {genres
              ? genres.map((genre, index) => (
                  <li key={index}>
                    {index === 0 ? genre.name : ` | ${genre.name}`}
                  </li>
                ))
              : null}
          </Genres>
          <Misc>
            <Item>
              {release_date
                ? release_date.substring(0, 4)
                : first_air_date.substring(0, 4)}
            </Item>
            <Item>
              {runtime ? runtime : episode_run_time[0]}
              &nbsp;min
            </Item>
            <Item>
              {vote_average && vote_average > 5 ? (
                <span role="img" aria-label="good">
                  😇
                </span>
              ) : (
                <span role="img" aria-label="good">
                  🤬
                </span>
              )}
              {vote_average} / 10
            </Item>
            <div>
              {imdb_id ? (
                <a
                  href={`https://www.imdb.com/title/${imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Item>
                    <img
                      src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"
                      width="40px"
                      alt="IMDB logo"
                      title="find on IMDB"
                    />
                  </Item>
                </a>
              ) : null}
            </div>
          </Misc>
          <Overview>
            <span>Summary</span>
            <P>{overview}</P>
          </Overview>
        </Info>
      </Grid>
    </Content>
  </>
);

ViewDetail.propTypes = {
  backdropPath: PropTypes.string,
  poster_path: PropTypes.string,
  original_title: PropTypes.string,
  original_name: PropTypes.string,
  genres: PropTypes.array,
  release_date: PropTypes.string,
  first_air_date: PropTypes.string,
  runtime: PropTypes.number,
  episode_run_time: PropTypes.array,
  vote_average: PropTypes.number,
  imdb_id: PropTypes.string,
  overview: PropTypes.string,
};
export default ViewDetail;
