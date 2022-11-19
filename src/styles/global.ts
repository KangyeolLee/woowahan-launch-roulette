import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  body {
    max-width: 1080px;
    margin: auto;
  }
`;

export default GlobalStyles;
