import React from 'react';

const ListItem= ({
    descripcion,
    onItemClick
}) => {
    return (
        <div onClick={onItemClick} className='ListItem'>{descripcion}</div>
    )
}

export default ListItem;
