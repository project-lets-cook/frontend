import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
* {
  
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
  }

:root {
  --color-primary: #BF3B0B;
  --color-secondary: #DCEEF2;
  --color-grey900: #151515;
  --color-grey300: #878787;
  --color-grey100: #F3F3F3;
  --color-grey50: #FFFFFF;
  --color-grey40: rgb(227,227,227,0.7);
  --color-grey60: #E1AF9D;
  --color-shadow: #00000015;
  --color-opacity: #00000070;
  --color-menu-effect: #842807;
  --color-error: #cf0303;
  --color-success:#00a707;
}

body,html{
    user-select: none;
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
