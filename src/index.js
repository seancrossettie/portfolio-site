import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import customTheme from './styles/theme';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();
  <>
    <Global 
      styles={css`
        html {
          min-width: 356px;
          scroll-behavior: smooth;
        }
        #root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: ${colorMode === 'light' ? 'white' : '#171717'};
        }
      `}
    />
    {children}
  </>
}

ReactDOM.render(
  <ChakraProvider resetCSS theme={customTheme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
