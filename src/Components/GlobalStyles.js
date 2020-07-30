import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const globalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&display=swap');

${reset};
a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
  }
  body{
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    background-color: #3C3F42;
    color: #f0E2dc;
  }
`;

export default globalStyles;
