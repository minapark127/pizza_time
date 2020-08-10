import React, { useState } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import ViewDetail from "../../Components/ViewDetail";
import useDetail from "./useDetail";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 30px;
  /* overflow: hidden; */
`;

const Div = styled.section`
  height: 100%;
`;

const Tabs = styled.section`
  position: relative;
  z-index: 1;
`;
const Tab = styled.input`
  font-size: 0.95rem;
  text-transform: uppercase;
  cursor: pointer;
`;
const ContentContainer = styled.div``;

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

const useTabs = (initial, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initial);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

function Detail() {
  const { result, isLoading, error } = useDetail();
  const tabContents = [
    { tab: "featured videos", content: null },
    { tab: "production companies", content: null },
    { tab: "production countries", content: null },
    { tab: "seasons", content: null },
  ];
  if (!isLoading) {
    result.videos
      ? (tabContents[0].content = result.videos.results)
      : (tabContents[0].content = null);
    result.production_companies
      ? (tabContents[1].content = result.production_companies)
      : (tabContents[1].content = null);
    result.production_countries
      ? (tabContents[2].content = result.production_countries)
      : (tabContents[2].content = null);
    result.seasons
      ? (tabContents[3].content = result.seasons)
      : (tabContents[3].content = null);
  }

  const cleanedContents = tabContents.filter((tab) =>
    tab.cotent !== null ? tab.content : null
  );
  const { currentItem, changeItem } = useTabs(0, cleanedContents);

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      {result && (
        <>
          <Helmet>
            <title>
              {result.original_title
                ? result.original_title
                : result.original_name}{" "}
              | Pizza Time
            </title>
          </Helmet>
          <Div>
            <ViewDetail
              backdropPath={result.backdrop_path}
              poster_path={result.poster_path}
              original_title={result.original_title}
              original_name={result.original_name}
              genres={result.genres}
              release_date={result.release_date}
              first_air_date={result.first_air_date}
              runtime={result.runtime}
              episode_run_time={result.episode_run_time}
              vote_average={result.vote_average}
              imdb_id={result.imdb_id}
              overview={result.overview}
            ></ViewDetail>
            <Tabs>
              {cleanedContents &&
                cleanedContents.map((tab, index) => (
                  <Tab
                    key={index}
                    type="button"
                    onClick={() => changeItem(index)}
                    value={tab.tab}
                  ></Tab>
                ))}
              <ContentContainer>
                {currentItem.tab === "featured videos" && (
                  <Videos>
                    {currentItem.content
                      ? currentItem.content.slice(0, 3).map((link, index) => (
                          <Video key={index}>
                            <iframe
                              src={`https://www.youtube.com/embed/${link.key}`}
                              width="260px"
                              height="180px"
                              title={link.name}
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
                )}
                {currentItem.tab === "production companies" && (
                  <div>
                    {currentItem.content
                      ? currentItem.content
                          .slice(0, 3)
                          .map((company, index) => (
                            <div key={index}>
                              <img
                                src={
                                  company.logo_path
                                    ? `https://image.tmdb.org/t/p/w300${company.logo_path}`
                                    : require("assets/noPoster.png")
                                }
                                width="260px"
                                height="180px"
                                alt={company.name}
                                title={company.name}
                              />
                              <span>{company.name}</span>
                            </div>
                          ))
                      : null}
                  </div>
                )}
                {currentItem.tab === "production countries" && (
                  <div>
                    {currentItem.content
                      ? currentItem.content
                          .slice(0, 3)
                          .map((country, index) => (
                            <div key={index}>
                              <span>{country.iso_3166_1}</span>
                              <span>{country.name}</span>
                            </div>
                          ))
                      : null}
                  </div>
                )}
                {currentItem.tab === "seasons" && (
                  <div>
                    {currentItem.content
                      ? currentItem.content.map((season, index) => (
                          <div key={index}>
                            <img
                              src={`https://image.tmdb.org/t/p/w300${season.poster_path}`}
                              width="260px"
                              height="180px"
                              alt={season.name}
                              title={season.name}
                            />
                            <span>{season.name}</span>
                          </div>
                        ))
                      : null}
                  </div>
                )}
              </ContentContainer>
            </Tabs>
          </Div>
          {error && <Message color="#e74c3c" text={error} />}
        </>
      )}
    </Container>
  );
}
export default Detail;
