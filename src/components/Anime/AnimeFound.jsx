import React, { Fragment } from 'react';

// imports from material-ui
import Grid from '@material-ui/core/Grid';
import Anime from './Anime';

const AnimeFound = ({ element }) => (
    <Fragment>
        <div className="root">
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
                            />

                        );
                    })
                }
            </Grid>
        </div>
    </Fragment>
);

export default AnimeFound;