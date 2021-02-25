import React, {useContext} from 'react';

// import the context
import {AnimesContext} from './../../contexts/AnimesContext';

// components
import Animes from '../Anime/Animes'
import NotFound from './../NotFound/notFound';


const AnimesMain = () => {
    const {doneFetch, animes} = useContext(AnimesContext);

    return(
        <div>
            <Animes animesList={animes} />
        </div>
    )
}

export default AnimesMain;