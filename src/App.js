import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import AboutMePage from "./views/AboutMePage.js";
import ContactMePage from "./views/ContactMePage";
import LandingPage from "./views/LandingPage";
import NavBar from "./components/NavBar";
import Work from "./views/Work";
import Skills from "./views/Skills";

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  /* Temporary height */
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  return (
    <AppContainer className=''>
      <Router>
        <NavBar />
        <Route path='/' component={LandingPage} exact />
        <Route path='/Work' component={Work} exact />
        <Route path='/about-me' component={AboutMePage} exact />
        <Route path='/contact-me' component={ContactMePage} exact />
        <Route path='/skills' component={Skills} exact />
        {/* <Route component={LandingPage}  /> */}
      </Router>
    </AppContainer>
  );
}

export default App;
