import React from 'react';
import { Link } from 'react-router-dom'

// materialui
import { AppBar, Toolbar } from '@material-ui/core'
import { ToggleButton } from '@material-ui/lab/';

const Header = () => (
    <AppBar className='header' color='secondary' position='sticky'>
        <Toolbar>
            <h2 className='header-title'>Anime API</h2>
            <Link className='header-link' to='/'>
            <ToggleButton className="toggle-button" >
                Home
            </ToggleButton>
            </Link>
            <Link className="header-link" to='/search'>
                <ToggleButton >
                    Search
            </ToggleButton>
            </Link>
        </Toolbar>
    </AppBar>
)

export default Header;