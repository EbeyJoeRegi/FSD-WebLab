import React from 'react';
import './App.css';

function ItemList({ items }) {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index} >
                    {item}
                </div>
            ))}
        </div>
    )
}

export default ItemList;
