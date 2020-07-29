import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <header>
    <ul>
      <li>
        <Link to="/">
          <span role="img" aria-label="pizza emoji">
            🍕
          </span>
        </Link>
      </li>
      <li>
        <Link to="/movie">Movie</Link>
      </li>
      <li>
        <Link to="/tv">TV</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
    </ul>
  </header>
);
