import React,{Fragment, useContext} from 'react';

import {SearchContext} from './../../contexts/SearchContext';

import Title from './../Common/Title';
import AnimeFound from './../Anime/AnimeFound'
import NotFound from './../NotFound/notFound'
import BuscaAnime from './../Anime/BuscaAnime'
import ProgressBar from './../Common/ProgressBar'

const SearchAnime = () => {

    const {doneFetch, element, validateQuery} = useContext(SearchContext);
    console.log(doneFetch);
    console.log(element.length)
    return(
        <Fragment>
            <Title title={'Search Anime'} />
            <BuscaAnime validateQuery={validateQuery} />
            {
                doneFetch ? 
                    (element.length ? <AnimeFound element={element}/> : <h2></h2>  )
                : <ProgressBar />
                }
            
        </Fragment>
    )
    }

export default SearchAnime;