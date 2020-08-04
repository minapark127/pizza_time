import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100vw;
  height: 60px;
  padding: 10px;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  position: sticky;
  top: 0;
  span {
    font-size: 30px;
  }
  box-shadow: 0px 4px 17px -6px rgba(0, 0, 0, 0.3);
  background-color: rgba(60, 63, 66, 0.5);
  backdrop-filter: saturate(180%) blur(10px);
  z-index: 1;
`;

const Ul = styled.ul`
  display: flex;
`;

const SLink = styled(Link)`
  width: 70px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid transparent;
  &:not(:first-child) {
    width: 100px;
    border-bottom: 3px solid
      ${(props) => (props.current ? "#f51406" : "transparent")};
    &:hover {
      border-bottom: 3px solid #f51406;
    }
  }
  &:hover {
    text-shadow: 2.5px 2.5px 10px rgba(128, 128, 128, 1),
      -3px -3px 10px rgba(128, 128, 128, 1);
  }
  text-shadow: ${(props) =>
    props.current
      ? `2.5px 2.5px 10px rgba(128, 128, 128, 1),
    -3px -3px 10px rgba(128, 128, 128, 1)`
      : "none"};
  transition: border-bottom 0.35s ease-in, text-shadow 0.35s ease-in;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Ul>
      <SLink to="/" current={pathname === "/"}>
        <li>
          <span role="img" aria-label="pizza emoji">
            🍕
          </span>
        </li>
      </SLink>
      <SLink to="/movie" current={pathname === "/movie"}>
        <li>Movie</li>
      </SLink>
      <SLink to="/tv" current={pathname === "/tv"}>
        <li>TV</li>
      </SLink>
      <SLink to="/search" current={pathname === "/search"}>
        <li>Search</li>
      </SLink>
    </Ul>
  </Header>
));
