
import React from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import GlobalFonts from "./fonts/fonts.js";
import Provider from "./context/Provider";
import Main from "./components/routes/Main";
import Header from "./components/containers/Header";


const App = () => {
 
   return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <GlobalFonts />
        <Provider>
          <Header/>
          <Main/>
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
