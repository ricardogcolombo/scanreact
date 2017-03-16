import React from 'react';
import Button from './button/Button';

const Scanner = ({buttonText, onScan}) => {
    return(
        <Button onClick={onScan} text={buttonText}/>
    )
}

export default Scanner; 
