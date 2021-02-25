import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// components
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'
import AnimesMain from './components/Anime'

// providers
import AnimesContextProvider from './contexts/AnimesContext'

import './assets/css/styles.css';

const App = () => (
  <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path='/' >
          <AnimesContextProvider>
            <AnimesMain />
          </AnimesContextProvider>
        </ Route>
      </Switch>
    <Footer />
  </BrowserRouter>
);


export default App;
