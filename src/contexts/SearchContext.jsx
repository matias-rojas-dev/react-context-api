import React, { createContext, useState } from 'react';

import {searchAnime} from './../constants/index';

export const SearchContext = createContext();

//create the context
const SearchContextProvider = ({children}) => {


    const [doneFetch, setDoneFetch] = useState(true); // -> verifica si está hecha la carga de datos
    const [element, setElement] = useState([]);
    const [initialQuery, setInitialQuery] = useState('');

    
    // get an anime with your name
    const getAnime = (query) => {
        fetch(searchAnime(query))
            .then((res) => res.json())
            .then((data) => {
                setDoneFetch(true);
                setElement(data.data);
            })
            .catch((err) => console.log(err))
    };

    // validate the query-name
    const validateQuery = (e, query = document.querySelector('#query').value.toLowerCase().trim()) => {
        if (e.type === 'keypress' && e.key !== 'Enter') return;
        const queryWord = query.match(/\w+/g);
        query = queryWord && queryWord.join('-');

        if(query && query !== initialQuery){
            setInitialQuery(query) // change initial query
            setDoneFetch(false)
            getAnime(query)
        }
    }

    return(
        <SearchContext.Provider value={{doneFetch, element, validateQuery}}>
            {children}
        </SearchContext.Provider>
    )
};


export default SearchContextProvider;