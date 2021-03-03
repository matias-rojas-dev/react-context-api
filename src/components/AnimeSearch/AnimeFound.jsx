import React, { Fragment } from 'react';

// imports from material-ui
import Grid from '@material-ui/core/Grid';

// components
import Anime from './../Anime/Anime';

const AnimeFound = ({ element }) => (
    <Fragment>
        <div className="animeList">
            <Grid container spacing={3} justify="center">
                {
                    element.map(animeElement => {
                        const {
                            id,
                            attributes
                        } = animeElement;

                        return (
                            <Anime
                                key={id}
                                titleEn={attributes.titles.en}
                                titleJp={attributes.titles.ja_jp}
                                image={attributes.posterImage.medium}
                                synopsis={attributes.synopsis}
                            />

                        );
                    })
                }
            </Grid>
        </div>
    </Fragment>
);

export default AnimeFound;