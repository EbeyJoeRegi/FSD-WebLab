import React from 'react';
import JokeList from './JokeList';

function App() {
  const jokes = [
    { setup: 'Why don’t scientists trust atoms?', punchline: 'Because they make up everything!' },
    { setup: 'Why did the scarecrow win an award?', punchline: 'Because he was outstanding in his field!' }
  ];

  return (
    <div>
      <h1>Joke List</h1>
      <JokeList jokes={jokes} />
    </div>
  );
}

export default App;