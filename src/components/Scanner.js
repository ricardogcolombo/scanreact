import React from 'react';

import Button from './button/Button';

const Scanner = ({
    buttonText,
    onScan,
    onManualScan,
    inputPlaceholder,
    getButtonText,
    onChange,
}) => {
    return (
        <div>
            <p className='label'>Producto</p>
            <div className='manualScan'>
                <input className='input' placeholder={inputPlaceholder} onChange={onChange}></input>
                <Button className='ManualButton' onClick={onManualScan} text={getButtonText}/>
            </div>
            <Button className='ScanButton' onClick={onScan} text={buttonText}/>
        </div>
    );
};

export default Scanner;
