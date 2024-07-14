import React from 'react';
import { Component } from 'react';
// Class component to render individual joke details
class Joke extends Component {
    render() {
        const { setup, punchline } = this.props.joke;
        return (
            <div style={{ padding: '10px', border: '1px solid black', margin: '5px' }}>
                <h2>{setup}</h2>
                <p>{punchline}</p>
            </div>
        );
    }
}

export default Joke;
