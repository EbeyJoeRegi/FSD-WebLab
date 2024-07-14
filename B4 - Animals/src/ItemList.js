import React, { Component } from 'react';
import './App.css';

class ItemList extends Component {
    render() {
        const { items } = this.props;

        return (
            <div>
                {items.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        );
    }
}

export default ItemList;
