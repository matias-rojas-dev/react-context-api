import React from 'react';

//imports from material-ui
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'; // https://material-ui.com/es/components/text-fields/
import IconButton from '@material-ui/core/IconButton'; //https://material-ui.com/es/api/icon-button/
import SearchIcon from '@material-ui/icons/Search'; //https://material-ui.com/es/components/material-icons/


  
const BuscaAnime = ({validateQuery}) => (
    <Paper className="paper defaultPaper">
        <TextField
            id="q_track"
            label="Track"
            margin="normal"
            variant="outlined"
            onKeyPress={e => validateQuery(e)}
        />
        <IconButton color="primary" onClick={e => validateQuery(e)}>
            <SearchIcon />
        </IconButton>
    </Paper>
)

export default BuscaAnime;