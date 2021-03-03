import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// components
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'
import AnimesMain from './components/Anime'
import notFound from './components/NotFound/notFound'
import SearchAnime from './components/AnimeSearch'
// providers
import AnimesContextProvider from './contexts/AnimesContext'
import SearchContextProvider from './contexts/SearchContext'

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
      <Route exact path='/search' >
        <SearchContextProvider>
          <SearchAnime />
        </SearchContextProvider>
      </ Route>

      <Route component={notFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
);


export default App;
