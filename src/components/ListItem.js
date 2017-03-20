import React from 'react';

const ListItem= ({
    text,
    onItemClick
}) => {
    return (
        <div onClick={onItemClick} className='ListItem'>{text}</div>
    )
}

export default ListItem;
