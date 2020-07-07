import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import AboutMePage from './components/AboutMePage.js'
import ContactMePage from './components/ContactMePage'
import Skills from './components/Skills'
import Projects from './components/Projects'


const AppContainer = styled.div`


  width: 100%;
  min-height: 100vh;
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
    <AppContainer className ="">
      <Router>
        <NavBar/>
        <Route path="/" component={LandingPage} exact />
        <Route path="/projects" component={Projects} exact/>
        <Route path="/about-me" component={AboutMePage} exact/>
        <Route path="/contact-me" component={ContactMePage} exact />
        <Route path="/skills" component={Skills} exact />
        {/* <Route component={LandingPage}  /> */}
      </Router>
    </AppContainer>
  );
}

export default App;
