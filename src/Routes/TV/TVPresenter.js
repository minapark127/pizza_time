import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import View from "Components/View";
import Message from "../../Components/Message";

const Container = styled.section``;

const TVPresenter = ({ onTheAir, topRated, popular, isLoading, error }) =>
  isLoading ? (
    "loading..."
  ) : (
    <Container>
      {onTheAir && onTheAir.length > 0 && (
        <Section title="On the Air">
          {onTheAir.map((tv) => (
            <View
              key={tv.id}
              id={tv.id}
              rating={tv.vote_average}
              year={tv.first_air_date.substring(0, 4)}
              imgUrl={tv.poster_path}
              title={tv.name}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map((tv) => (
            <View
              key={tv.id}
              id={tv.id}
              rating={tv.vote_average}
              year={tv.first_air_date.substring(0, 4)}
              imgUrl={tv.poster_path}
              title={tv.name}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((tv) => (
            <View
              key={tv.id}
              id={tv.id}
              rating={tv.vote_average}
              year={tv.first_air_date.substring(0, 4)}
              imgUrl={tv.poster_path}
              title={tv.name}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#f51406" text={error} />}
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
