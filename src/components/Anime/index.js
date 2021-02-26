import React, {useContext} from 'react';

// import the context
import {AnimesContext} from './../../contexts/AnimesContext';

// components
import Animes from '../Anime/Animes'


const AnimesMain = () => {
    const {animes} = useContext(AnimesContext);

    return(
        <div>
            <Animes animesList={animes} />
        </div>
    )
}

export default AnimesMain;