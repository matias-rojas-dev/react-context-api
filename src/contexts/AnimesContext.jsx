import React, { createContext, useState, useEffect } from 'react';

import { principalsAnimes} from './../constants/index';

export const AnimesContext = createContext();

const AnimesContextProvider = ({children}) => {
    const [doneFetch, setDoneFetch] = useState();
    const [animes, setAnimes] = useState([]);
    //const [hits, setHits] = useState();

    useEffect(() => getPrincipalsAnimes(), []);
    //useEffect(() => getAnimeWithCategories(), []);


    // function to get the first 15 animes
    const getPrincipalsAnimes = () => { 
        fetch(principalsAnimes())
            .then( responde => responde.json())
            .then((data) => {
                setDoneFetch(true);
                setAnimes(data.data);
                console.log(data.data)

            })
            .catch((err)  => console.log(err))
    };
/*

    // function to filter animes at categories
    const getAnimeWithCategories = (query) => {
        query && fetch(animeCategories(query))
            .then((data) => data.json())
            .then((res) => setHits(res.hits))
            .catch((err) => console.log(err))
    } */



    return(
        <AnimesContext.Provider value={{doneFetch, animes}} >
            {children}
        </AnimesContext.Provider>
    )
};

AnimesContextProvider.displayName = 'AnimesContextProvider';

export default AnimesContextProvider;