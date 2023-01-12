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
  --color-secondary: #DAD1E9;
  --color-grey900: #151515;
  --color-grey300: #878787;
  --color-grey100: #F3F3F3;
  --color-grey50: #FFFFFF;
  /* --color-grey40: rgb(227,227,227,0.7); */
  --color-grey40: rgb(255,255,255,0.7);
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
    font-family: "Nunito", sans-serif;
    overflow-x: hidden;
}

button {
    font-family: "Nunito", sans-serif;
    cursor: pointer;
}

ul, ol, li{
    list-style: none;
}

nav button:hover{
  /* background-color: var(--color-secondary); */
  color: var(--color-primary)
}

nav button.selected-menu {
    transform: translateX(-15px);
    border: none;
    width: 260px;
    height: 40px;
    border-radius: 30px 0 0 0px;
    border-bottom-left-radius: 0;
    color: var(--color-grey50);
    background-color: var(--color-primary);
    box-shadow: 1px 1px 5px var(--color-grey300);

    ::before {
      transform: translateY(30px);
      content: "";
      position: absolute;
      left: 0;
      width: 15px;
      height: 20px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      background-color: var(--color-menu-effect);
      z-index: 2;
    }

    ::after {
      transform: translateY(30px);
      content: "";
      position: absolute;
      left: 0;
      width: 15px;
      height: 12px;
      background-color: var(--color-primary);
      z-index: 1;
    }
  }

   ::-webkit-scrollbar-track {
    background-color: var(--color-grey100);
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
  }
 
`;
