import React, {useState} from 'react';

// utils
import {animeCategories} from './../constants/index';


// components
import Title from './../components/Common/Title'

const AnimeSearchContextProvider = () => {

    const [hits, setHits] = useState();

    const getAnimeWithCategories = (query) => {
        query && fetch(animeCategories(query))
            .then((data) => data.json())
            .then((res) => setHits(res.hits))
            .catch((err) => console.log(err))
    } 

    return (
        <div>
            <Title title={'Search anime by categories'} />
        </div>
    )
}

export default AnimeSearchContextProvider;