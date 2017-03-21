import React from 'react';

const Field = ({
    label,
    value,
    className
}) => {
    var styleclass = (!!className) ? className : '';
    if (styleclass.length >= 0) {
        styleclass += ' Field';
    } else {
        styleclass = 'Field';
    }
    return (
        <div className={styleclass}>
            <p className='label'>{label}</p>
            <p className='value'>{value}</p>
        </div>
    );

};
export default Field;
