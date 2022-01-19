import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import '@fontsource/inter';
import firebase from 'firebase/compat/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import firebaseConfig from './helpers/apiKeys';
import customTheme from './styles/theme';

// Sets Global Styles for the Document 
const GlobalStyle = ({ children }) => {
// useColorMode() is a hook that toggles between 'light' and 'dark'
  const { colorMode } = useColorMode();
  return (
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
  )
}

// Initializes a firebase connection
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <ChakraProvider resetCSS theme={customTheme}>
    <GlobalStyle>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStyle>
  </ChakraProvider>,
  document.getElementById('root')
);
