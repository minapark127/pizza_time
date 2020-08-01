import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.section``;

const Detail = styled.div``;

const TVPresenter = ({ onTheAir, topRated, popular, isLoading, error }) =>
  isLoading ? (
    "loading..."
  ) : (
    <Container>
      {onTheAir && onTheAir.length > 0 && (
        <Section title="On the Air">
          {onTheAir.map((tv) => (
            <Detail key={tv.id}>
              <div>{tv.poster_path}</div>
              <div>{tv.name}</div>
              <div>
                {tv.vote_average && tv.vote_average > 5 ? (
                  <span role="img" aria-label="good">
                    😇
                  </span>
                ) : (
                  <span role="img" aria-label="bad">
                    🤬
                  </span>
                )}
                {tv.vote_average}/10
              </div>
            </Detail>
          ))}
        </Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  onTheAir: PropTypes.array,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
