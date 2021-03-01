import React, {useContext} from 'react'

import Categories from './../Common/Categories'
import { SearchContext } from './../../contexts/SearchContext';
import Categorie from './Categorie';

const ElementAnimeCategories = () => {

    const { animeCategories } = useContext(SearchContext);
    

    return (
        <div>
            <h1>{`${animeCategories}`}</h1>
            <Categories title={'Categorías'} />
            <Categorie categorieFilter={animeCategories} />
        </div>
    )
};

export default ElementAnimeCategories;