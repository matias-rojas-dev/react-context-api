import React, {useContext} from 'react';

// import the context
import {AnimesContext} from './../../contexts/AnimesContext';

// components
import Title from './../Common/Title'
import Animes from '../Anime/Animes'
import ProgressBar from './../Common/ProgressBar'

const AnimesMain = () => {
    
    const {doneFetch, animes} = useContext(AnimesContext);

    return(
        <div>
            <Title title='Welcome to Anime API'/>
            {
                doneFetch ? 
                    (animes.length ? <Animes animesList={animes} /> : <ProgressBar />)
                    :   <ProgressBar />
            }
        </div>
    )
}

export default AnimesMain;