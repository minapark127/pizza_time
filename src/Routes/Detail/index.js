import React, { useState } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import ViewDetail from "../../Components/ViewDetail";
import useDetail from "./useDetail";
import ReactCountryFlag from "react-country-flag";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  padding: 30px;
  /* overflow: hidden; */
`;

const Div = styled.section`
  height: 80%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 2fr;
  justify-items: center;
`;

const Tabs = styled.section`
  position: relative;
  z-index: 1;
  width: 70%;
  display: grid;
  grid-template-rows: 0.5fr 4.5fr;
  align-items: center;
  margin-bottom: 30px;
`;
const TabHeader = styled.div`
  height: 100%;
  .current {
    border-bottom: 2px solid #f51406;
    text-shadow: 2.5px 2.5px 10px rgba(128, 128, 128, 1),
      -3px -3px 10px rgba(128, 128, 128, 1);
    background-color: rgba(33, 33, 33, 0.7);
  }
  .notCurrent {
    border-bottom: 2px solid transparent;
  }
  transition: border-bottom 0.37s ease-in, text-shadow 0.35s ease-in;
`;
const Tab = styled.input`
  all: unset;
  width: 20%;
  padding: 20px 10px;
  text-align: center;
  font-size: 1.2rem;
  text-transform: capitalize;
  cursor: pointer;
  background-color: rgba(60, 63, 66, 0.8);
  border-bottom: 2px solid transparent;
  box-shadow: 0px 4px 17px -6px rgba(0, 0, 0, 0.6);
  :hover {
    border-bottom: 2px solid #f51406;
    background-color: rgba(33, 33, 33, 0.7);
  }
  transition: border-bottom 0.37s ease-in;
`;
const ContentContainer = styled.div`
  height: 100%;
  padding: 5px 20px;
  background-color: rgba(33, 33, 33, 0.7);
  box-shadow: 0px 4px 17px -6px rgba(0, 0, 0, 0.6);
  align-self: center;
  display: grid;
  grid-auto-rows: 1fr;
  align-items: center;
  overflow: scroll;
`;

const Items = styled.div`
  display: flex;
`;
const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(1fr, 260px), 15px;
  margin-right: 30px;
  iframe,
  img {
    margin-bottom: 10px;
    align-self: end;
  }
  span {
    text-align: center;
    font-size: 1rem;
    text-transform: none;
    letter-spacing: 0.8px;
    align-self: end;
  }
  a {
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

  if (!isLoading) {
    const current = document.querySelector(`input[value="${currentItem.tab}"]`);
    const allTabs = document.querySelectorAll(`input[type="button"]`);
    if (current !== null) {
      allTabs.forEach((tab) =>
        tab !== current
          ? tab.classList.add("notCurrent") ||
            tab.classList.replace("current", "notCurrent")
          : tab.classList.add("current") ||
            tab.classList.replace("notCurrent", "current")
      );
    }
  }

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
              <TabHeader>
                {cleanedContents &&
                  cleanedContents.map((tab, index) => (
                    <Tab
                      key={index}
                      type="button"
                      onClick={() => changeItem(index)}
                      value={tab.tab}
                      className={index === 0 ? "current" : null}
                    ></Tab>
                  ))}
              </TabHeader>
              <ContentContainer>
                {currentItem.tab === "featured videos" && (
                  <Items>
                    {currentItem.content
                      ? currentItem.content.slice(0, 3).map((link, index) => (
                          <Item key={index}>
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
                          </Item>
                        ))
                      : null}
                  </Items>
                )}
                {currentItem.tab === "production companies" && (
                  <Items>
                    {currentItem.content
                      ? currentItem.content
                          .slice(0, 3)
                          .map((company, index) => (
                            <Item key={index}>
                              <img
                                src={
                                  company.logo_path
                                    ? `https://image.tmdb.org/t/p/w200${company.logo_path}`
                                    : require("assets/noPoster-sml.png")
                                }
                                alt={company.name}
                                title={company.name}
                              />

                              <span>{company.name}</span>
                            </Item>
                          ))
                      : null}
                  </Items>
                )}
                {currentItem.tab === "production countries" && (
                  <Items>
                    {currentItem.content
                      ? currentItem.content
                          .slice(0, 3)
                          .map((country, index) => (
                            <Item key={index}>
                              <ReactCountryFlag
                                countryCode={country.iso_3166_1}
                                svg
                                style={{
                                  width: "260px",
                                  height: "140px",
                                }}
                                title={country.iso_3166_1}
                              />
                              <span>{country.name}</span>
                            </Item>
                          ))
                      : null}
                  </Items>
                )}
                {currentItem.tab === "seasons" && (
                  <Items>
                    {currentItem.content
                      ? currentItem.content.map((season, index) => (
                          <Item key={index}>
                            <img
                              src={`https://image.tmdb.org/t/p/w300${season.poster_path}`}
                              height="180px"
                              alt={season.name}
                              title={season.name}
                            />
                            <span>{season.name}</span>
                          </Item>
                        ))
                      : null}
                  </Items>
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
