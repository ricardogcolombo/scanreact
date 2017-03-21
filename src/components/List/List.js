import React from 'react';
import ListItem from './ListItem'

const List = ({
    items,
    onItemClick
}) => {
    let listItems = items.map((item, index) =>
        <ListItem 
            key={item.codean} 
            onItemClick={()=>onItemClick(item.codean)} 
            {...item}
            />
    );
    return (
        <div>
        <p className='ListHeader'>Productos a revisar</p>
        <ul className='List'>
            {listItems}
        </ul>
        </div>
    )
}

export default List;
