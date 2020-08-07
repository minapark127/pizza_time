import React from "react";
import styled from "styled-components";
import useHome from "./useHome";
import Landing from "../../Components/Landing";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  padding: 30px;
`;

function Home() {
  const { trending, isLoading, error } = useHome();
  const trend = trending[0];

  return isLoading ? (
    "Loading.."
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
    </Container>
  );
}
export default Home;
