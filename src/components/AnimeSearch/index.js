import React,{Fragment, useContext} from 'react';

// import the context
import {SearchContext} from './../../contexts/SearchContext';

// components
import Title from './../Common/Title';
import ProgressBar from './../Common/ProgressBar'
import AnimeFound from './../AnimeSearch/AnimeFound'
import FilterAnime from './../AnimeSearch/FilterAnime'

const SearchAnime = () => {

    const {doneFetch, element, validateQuery} = useContext(SearchContext);

    return(
        <Fragment>
            <Title title={'Search Anime'} />
            <FilterAnime validateQuery={validateQuery} />
            {
                doneFetch ? 
                    (element.length ? <AnimeFound element={element}/> : <h2></h2>  )
                : <ProgressBar />
                }
            
        </Fragment>
    )
    }

export default SearchAnime;