import React from 'react';
import {Button} from '@material-ui/core';
import {notFoundGif} from './../../constants/index';

const NotFound = () => (
    <div className='notFound'>
        <div className="notFound-content">
        <h1>404: Not found </h1>
        <Button href="/" className=''>Back home</Button>
        </div>
        <img src={notFoundGif} width='300' />
    </div>
);

export default NotFound;