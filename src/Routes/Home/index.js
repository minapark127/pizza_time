import React from "react";
import styled from "styled-components";
import useHome from "./useHome";
import Landing from "../../Components/Landing";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Helmet from "react-helmet";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  padding: 30px;
  overflow: hidden;
`;

function Home() {
  const { trending, isLoading, error } = useHome();
  const trend = trending[0];

  return (
    <>
      <Helmet>
        <title>Pizza Time</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          {trend && (
            <>
              <Landing
                title={trend.title ? trend.title : trend.name}
                isMovie={trend.media_type === "movie" ? true : false}
                id={trend.id}
                backdropPath={trend.backdrop_path}
              />
            </>
          )}
          {error && <Message color="#e74c3c" text={error} />}
        </Container>
      )}
    </>
  );
}
export default Home;
