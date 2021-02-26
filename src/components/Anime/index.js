import React, {useContext} from 'react';

// import the context
import {AnimesContext} from './../../contexts/AnimesContext';

// components
import Title from './../Common/Title'
import Animes from '../Anime/Animes'


const AnimesMain = () => {
    const {animes} = useContext(AnimesContext);

    return(
        <div>
            <Title title='Welcome to Anime API'/>
            <Animes animesList={animes} />
        </div>
    )
}

export default AnimesMain;