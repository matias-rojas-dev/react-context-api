import React from 'react'
import {Button} from '@material-ui/core'

const NotFound = () => (
    <div className='notFound'>
        <div className="notFound-content">
        <h1>404: Not found </h1>
        <Button href="/" className=''>Back home</Button>
        </div>
        <img src='https://i.pinimg.com/originals/d9/2a/1c/d92a1cf8aef657f514349872e882dae6.gif' width='300' />
    </div>
);

export default NotFound;