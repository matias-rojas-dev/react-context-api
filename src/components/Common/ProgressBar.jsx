import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const ProgressBar = () => (
    <div className="progressBar">
        <CircularProgress variant="determinate" value={50} color="secondary" >
            
        </CircularProgress>
    </div>
        
);

export default ProgressBar;