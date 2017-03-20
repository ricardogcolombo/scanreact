import React from 'react';
import ListItem from './ListItem'

const List = ({
    items,
    onItemClick
}) => {

    var listItems = items.map((item,index) => 
        <ListItem onItemClick={onItemClick} text={item.descripcion} />
    )
    return (
        <div className='List'>
        <p className='ListHeader'>Productos a revisar</p>
            {listItems}
        </div>
    )
}

export default List;
