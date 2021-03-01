import React,{Fragment, useContext} from 'react';

import {SearchContext} from './../../contexts/SearchContext';

import Title from './../Common/Title';
import AnimeFound from './AnimeFound'
import NotFound from './../NotFound/notFound'
import BuscaAnime from './BuscaAnime'

const SearchAnime = () => {

    const {initialQuery, doneFetch, element, validateQuery} = useContext(SearchContext);

    return(
        <Fragment>
            <Title title={'Search Anime'} />
            <BuscaAnime validateQuery={validateQuery} />
            {
                doneFetch ? 
                    (element.length ? <AnimeFound element={element}/> : <h1>Hola</h1>  )
                : <h1>Hola</h1>
                }
            
        </Fragment>
    )
    }

export default SearchAnime;