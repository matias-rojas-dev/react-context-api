import React, {Fragment} from 'react'
import Grid from '@material-ui/core/Grid'
//components
import Anime from './Anime';
import Title from '../Common/Title';

const Animes = ({animesList}) => (
    <Fragment>
        <Title title={'Anime founds'} />
        <div className="animeList">
            <Grid container spacing={3} justicy="center">
            {
                
                animesList.map(anime => {
                    const {id, attributes} = anime ;

                    return (
                        <Anime 
                            key = {id}
                            titleEn = {attributes.titles.en}
                            titleJp = {attributes.titles.ja_jp}
                            image = {attributes.posterImage.medium}
                        />
                    )
                })
            }
            </Grid>
        </div>

    </Fragment>

)

export default Animes;