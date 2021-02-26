import React from 'react';

// materialui
import {AppBar, Toolbar} from '@material-ui/core'

const Header = () => (
    <AppBar className='header' color='secondary' position='sticky'>
        <Toolbar>
            <h2 className='header-title'>Anime API</h2>
        </Toolbar>
    </AppBar>
)

export default Header;