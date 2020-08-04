import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.section`
  width: 97vw;
  margin: 0 auto;
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 25px 18px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
