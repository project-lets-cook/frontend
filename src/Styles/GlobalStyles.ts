import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

:root {
  --color-primary: #BF3B0B;
  --color-secondary: #DCEEF2;
  --color-grey900: #151515;
  --color-grey300: #878787;
  --color-grey100: #F3F3F3;
  --color-grey40: rgb(227,227,227,0.7);
  --color-grey50: #FFFFFF;
  --color-shadow: #00000015;
  --color-opacity: #00000070;
  --color-menu-effect: #842807;
}

body,html{
    width: 100vw;
    height: 100vh;
}

body {
    font-family: 'Nunito', sans-serif;
    overflow-x: hidden;
}

button {
    font-family: 'Nunito', sans-serif;
    cursor: pointer;
}

ul, ol, li{
    list-style: none;
}

`;
