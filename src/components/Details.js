import React from 'react';
import Button from './button/Button';

const Details = ({
    codart,
    description,
    onBackButtonPress
}) => {
    return (
    <div> 
    <Button onClick={onBackButtonPress} text='Back To Scanner'/>   
    
    </div>)
};

export default Details;
