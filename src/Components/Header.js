import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = styled.header`
  width: 100vw;
  height: 60px;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  position: sticky;
  top: -10px;
  span {
    font-size: 30px;
  }
  box-shadow: 0px 4px 17px -6px rgba(0, 0, 0, 0.3);
  background-color: rgba(60, 63, 66, 0.5);
  backdrop-filter: saturate(180%) blur(10px);
  z-index: 2;
`;
const Toggle = styled.a`
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
  display: none;
  :hover {
    color: rgb(245, 20, 6, 0.8);
  }
  svg {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
const Ul = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .active {
    display: flex !important;
  }
`;

const SLink = styled(Link)`
  width: 70px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2.5px solid transparent;
  border-bottom: 2.5px solid
    ${(props) => (props.current ? "#f51406" : "transparent")};
  &:hover {
    border-bottom: 2.5px solid #f51406;
  }
  text-shadow: ${(props) =>
    props.current
      ? `2.5px 2.5px 10px rgba(128, 128, 128, 1),
    -3px -3px 10px rgba(128, 128, 128, 1)`
      : "none"};
  transition: border-bottom 0.35s ease-in, text-shadow 0.35s ease-in;
`;

const Menu = styled.div`
  display: flex;
  a {
    width: 100px;
  }
  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    a {
      width: 30%;
      align-self: flex-end;
      box-shadow: 0px 4px 17px -6px rgba(0, 0, 0, 0.3);
      background-color: rgba(33, 33, 33, 0.85);
      backdrop-filter: saturate(180%) blur(10px);
      z-index: 2;
      height: 70px;
    }
    li {
      width: 100%;
      height: 100%;
      text-align: right;
      padding-right: 10px;
      padding-top: 20px;
    }
  }
  @media (max-width: 425px) {
    a {
      width: 50%;
    }
  }
`;

const toggleMenu = () => {
  const menu = document.querySelectorAll(".menu");
  menu.forEach((menu) => menu.classList.toggle("active"));
};

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
      <Menu className="menu">
        <SLink to="/movie" current={pathname === "/movie"}>
          <li>Movie</li>
        </SLink>
        <SLink to="/tv" current={pathname === "/tv"}>
          <li>TV</li>
        </SLink>
        <SLink to="/search" current={pathname === "/search"}>
          <li>Search</li>
        </SLink>
      </Menu>
    </Ul>
    <Toggle className="toggleBtn" onClick={() => toggleMenu()}>
      <FontAwesomeIcon icon="bars" />
    </Toggle>
  </Header>
));
