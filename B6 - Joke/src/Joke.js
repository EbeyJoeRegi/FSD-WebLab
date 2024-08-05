import React from "react";

const Joke = ({ joke }) => {
  const { setup, punchline } = joke;
  return (
    <div style={{ padding: '10px', border: '1px solid black', margin: '5px' }}>
      <h2>{setup}</h2>
      <p>{punchline}</p>
    </div>
  );
};

export default Joke;