import React, { Component } from 'react';
import Joke from './Joke';

// Class component to render the list of jokes
class JokeList extends Component {
    render() {
        const { jokes } = this.props;
        return (
            <div>
                {jokes.map((joke, index) => (
                    <Joke key={index} joke={joke} />
                ))}
            </div>
        );
    }
}

export default JokeList;
