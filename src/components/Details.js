import React from 'react';
import Button from './button/Button';

const Details = ({
    product,
    onBackButtonPress
}) => {
    return (
    <div> 
    {product.codart}
    <Button onClick={onBackButtonPress} text='Back To Scanner'/>   
    
    </div>)
};

export default Details;
