import React, { useState } from 'react';

const DictionaryApp = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState(null);

  const fetchDefinition = async () => {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    if (data[0]) {
      setDefinition(data[0].meanings[0].definitions[0].definition);
    } else {
      setDefinition('Word not found');
    }
  };

  return (
    <div>
      <h2>Dictionary App</h2>
      <input
        type="text"
        placeholder="Search a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={fetchDefinition}>Search</button>
      <p>{definition ? `Definition: ${definition}` : 'Search for a word!'}</p>
    </div>
  );
};

export default DictionaryApp;
