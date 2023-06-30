import React from 'react';
import Conversation from './components/Conversation';

function App() {
  const dialogueData = require('./components/data.json');

  return (
    <div className="App">
      <Conversation dialogue={dialogueData.dialogue} />
    </div>
  );
}


export default App;