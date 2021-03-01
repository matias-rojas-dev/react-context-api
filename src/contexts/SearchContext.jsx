import React, { createContext, useState, useEffect } from 'react';

import {searchAnime} from './../constants/index';

export const SearchContext = createContext();

//create the context
const SearchContextProvider = ({children}) => {

    const [doneFetch, setDoneFetch] = useState(); // -> verifica si está hecha la carga de datos
    const [element, setElement] = useState([]);
    const [initialQuery, setInitialQuery] = useState('')

    useEffect(() => getAnime(), []);

    const getAnime = (query) => {
        fetch(searchAnime(query))
            .then((res) => res.json())
            .then((data) => {
                setDoneFetch(true);
                setElement(data.data);
                console.log(data.data)
            })
    };

    const validateQuery = (e, query = document.querySelector('#query').value.toLoweCase().trim()) => {
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
        <SearchContext.Provider value={{initialQuery, doneFetch, element, validateQuery}}>
            {children}
        </SearchContext.Provider>
    )
};


export default SearchContextProvider;