import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.section`
  width: 100vw;
  height: 100%;
  padding: 30px;
  /* overflow: hidden; */
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
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
  height: 100%;
  position: relative;
`;
const Grid = styled.div`
  display: grid;
  grid-auto-rows: 80vh;
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

const Section = styled.section`
  span {
    font-size: 0.95rem;
    text-transform: uppercase;
  }
`;
const Videos = styled.div`
  display: flex;
  margin-top: 15px;
`;
const Video = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  iframe {
    margin-bottom: 10px;
  }
  span {
    text-transform: none;
    letter-spacing: 0.8px;
    :hover {
      text-decoration: underline;
    }
  }
`;

const DetailPresenter = ({ result, isLoading, error, recommend }) =>
  isLoading ? (
    "loading..."
  ) : (
    <Container>
      {result && (
        <>
          <Backdrop
            bgUrl={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
          />
          <Content>
            <Grid>
              <Poster
                src={
                  result.poster_path
                    ? `https://image.tmdb.org/t/p/w400${result.poster_path}`
                    : require("../../assets/noPoster.png")
                }
                alt={`poster for ${result.title}`}
                title={result.title}
              ></Poster>
              <Info>
                <Title>
                  {result.original_title
                    ? result.original_title
                    : result.original_name}
                </Title>
                <Genres>
                  {result.genres
                    ? result.genres.map((genre, index) => (
                        <li key={genre.id}>
                          {index === 0 ? genre.name : ` | ${genre.name}`}
                        </li>
                      ))
                    : ""}
                </Genres>
                <Misc>
                  <Item>
                    {result.release_date
                      ? result.release_date.substring(0, 4)
                      : result.first_air_date.substring(0, 4)}
                  </Item>
                  <Item>
                    {result.runtime
                      ? result.runtime
                      : result.episode_run_time[0]}
                    &nbsp;min
                  </Item>
                  <Item>
                    {result.vote_average && result.vote_average > 5 ? (
                      <span role="img" aria-label="good">
                        😇
                      </span>
                    ) : (
                      <span role="img" aria-label="good">
                        🤬
                      </span>
                    )}
                    {result.vote_average} / 10
                  </Item>
                  {result.imdb_id ? (
                    <a href={`https://www.imdb.com/title/${result.imdb_id}`}>
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
                </Misc>
                <Overview>
                  <span>Summary</span>
                  <P>{result.overview}</P>
                </Overview>
                <Section>
                  {result.videos.results.length > 0 ? (
                    <span>Featured videos</span>
                  ) : null}

                  <Videos>
                    {result.videos.results
                      ? result.videos.results.slice(0, 3).map((link) => (
                          <Video key={link.key}>
                            <iframe
                              src={`https://www.youtube.com/embed/${link.key}`}
                              width="260px"
                              height="180px"
                              title="link.name"
                            />
                            <a
                              href={`https://www.youtube.com/watch?v=${link.key}`}
                            >
                              <span>
                                {link.name.length > 20
                                  ? `${link.name.substring(0, 23)} ...`
                                  : link.name}
                              </span>
                            </a>
                          </Video>
                        ))
                      : null}
                  </Videos>
                </Section>
              </Info>
            </Grid>
          </Content>
        </>
      )}
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
