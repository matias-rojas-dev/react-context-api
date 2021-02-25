import React, { createContext, useState, useEffect, Children } from 'react';

import { principalsAnimes } from './../constants/index';

export const AnimesContext = createContext();

const AnimesContextProvider = ({children}) => {
    const [doneFetch, setDoneFetch] = useState();
    const [animes, setAnimes] = useState([]);

    useEffect(() => getPrincipalsAnimes(), []);

    const getPrincipalsAnimes = () => {
        fetch(principalsAnimes())
            .then( responde => responde.json())
            .then((data) => {
                setDoneFetch(true);
                setAnimes(data.data);
                console.log(data.data)

            })
            .catch((err)  => console.log(err))
    }

    return(
        <AnimesContext.Provider value= {{doneFetch, animes}} >
            {children}
        </AnimesContext.Provider>
    )
};

AnimesContextProvider.displayName = 'AnimesContextProvider';

export default AnimesContextProvider;