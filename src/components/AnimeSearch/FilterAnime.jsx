import React from 'react';

//imports from material-ui
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'; // https://material-ui.com/es/components/text-fields/
import IconButton from '@material-ui/core/IconButton'; //https://material-ui.com/es/api/icon-button/
import SearchIcon from '@material-ui/icons/Search'; //https://material-ui.com/es/components/material-icons/


  
const FilterAnime = ({validateQuery}) => (
    <Paper className="paper defaultPaper">
        <TextField
            id="query"
            label="Anime"
            margin="normal"
            variant="standard"
            onKeyPress={e => validateQuery(e)}
        />
        <IconButton color="secondary" size="medium" onClick={e => validateQuery(e)}>
            <SearchIcon />
        </IconButton>
    </Paper>
)

export default FilterAnime;