import React, { Component } from 'react';
import ItemList from './ItemList';  // Assuming ItemList is in the same directory

class Main extends Component {
    render() {
        const items = ['Cat', 'Dog', 'Chicken', 'Cow', 'Sheep', 'Horse'];

        return (
            <div>
                <h1>List of Items</h1>
                <ItemList items={items} />
            </div>
        );
    }
}

export default Main;
