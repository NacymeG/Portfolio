import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color--background:  #0a192f;
    --color--green: #62fbd8;
    --color--textWhite: #ccd6f6;
    --color--textGrey: #8892b0;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
    background-color: var(--color--background);
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    color: var(--color--textGrey);

  }
  span{
    color: var(--color--green);
    font-family: 'Fira Mono', monospace;

  }
  a {
    text-decoration: none;
    color: #BCC5E4;
    margin-left: 20px;
      :hover {
    color: var(--color--textGrey);
  }
`;

export default GlobalStyle;
