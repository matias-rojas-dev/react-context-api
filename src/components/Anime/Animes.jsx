import React, {Fragment} from 'react'

//components
import Anime from './Anime';

const Animes = ({animesList}) => (
    <Fragment>
        <div className="animeList">
            {
                
                animesList.map(anime => {
                    const {id, attributes} = anime ;

                    return (
                        <Anime
                            key = {id}
                            synopsis = {attributes.synopsis}
                            titleEn = {attributes.titles.en}
                            titleJp = {attributes.titles.ja_jp}
                            image = {attributes.posterImage.medium}

                        />
                    )
                })
            }
        </div>

    </Fragment>

)

export default Animes;