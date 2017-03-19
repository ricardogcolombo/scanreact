import React from 'react';

const Field = ({
    label,
    value,
}) => {
    return (
        <div>
    <p className='label'>{label}</p>
    <p className='value'>{value}</p>
    </div>);
};
export default Field;
