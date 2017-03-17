import React from 'react';
import Button from './button/Button';

const Scanner = ({
    buttonText,
    onScan,
    onManualScan,
    inputPlaceholder,
    getButtonText,
    onChange
}) => {
    return (
        <div>
        <input placeholder={inputPlaceholder} onChange={onChange}></input>
        <Button onClick={onManualScan} text={getButtonText}/>
        <Button onClick={onScan} text={buttonText}/>
        </div>
    )
}

export default Scanner;
