import React, { createContext, useState, useEffect } from 'react';

// utils
import { principalsAnimes} from './../constants/index';

export const AnimesContext = createContext();

//create the context
const AnimesContextProvider = ({children}) => {
    
    const [doneFetch, setDoneFetch] = useState();
    const [animes, setAnimes] = useState([]);
    

    useEffect(() => getPrincipalsAnimes(), []);


    // get the first 15 animes
    const getPrincipalsAnimes = () => { 
        fetch(principalsAnimes())
            .then((res) => res.json())
            .then((data) => {
                setDoneFetch(true);
                setAnimes(data.data);
                console.log(data.data)

            })
            .catch((err)  => console.log(err))
    };
    

    return(
        <AnimesContext.Provider value={{doneFetch, animes}} >
            {children}
        </AnimesContext.Provider>
    )
};

AnimesContextProvider.displayName = 'AnimesContextProvider';

export default AnimesContextProvider;