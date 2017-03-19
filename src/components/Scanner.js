import React from 'react';

import Button from './button/Button';

const Scanner = ({
    buttonText,
    onManualScan,
    inputPlaceholder,
    getButtonText,
    onChange,

    onTouchCancelScan,
    onTouchEndScan,
    onTouchMoveScan,
    onTouchStartScan
}) => {
    return (
        <div>
            <p className='label'>Producto</p>
            <div className='manualScan'>
                <input className='input' placeholder={inputPlaceholder} onChange={onChange}></input>
                <Button className='ManualButton' onClick={onManualScan} text={getButtonText}/>

            </div>
            <Button className='ScanButton'
                text={buttonText}
                onTouchCancel={onTouchCancelScan}
                onTouchEnd={onTouchEndScan}
                onTouchMove={onTouchMoveScan}
                onTouchStart={onTouchStartScan}/>
        </div>
    );
};

export default Scanner;
