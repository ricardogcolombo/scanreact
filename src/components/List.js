import React from 'react';
import ListItem from './ListItem'

const List= ({
    items
}) => {

    var listItems = items.map((item)=>{
    debugger;
        <ListItem  />
    })
    return (
        <div>
            {listItems}
        </div>
    )
}

export default List;
