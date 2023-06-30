import React, { useState } from 'react';
import Conversation from './components/Conversation';
import Guide from './components/Guide';
import './App.css';

function App() {
  const dialogueData = require('./components/data.json');
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="App">
      <div className="app-container">
        <div className="conversation-container">
          <Conversation dialogue={dialogueData.dialogue} />
        </div>
        <div className="guide-toggle-container">
          <button className={`guide-toggle ${showGuide ? 'active' : ''}`} onClick={() => setShowGuide(!showGuide)}>
            {showGuide ? 'Hide Guide' : 'Show Guide'}
          </button>
          <Guide showGuide={showGuide} />
        </div>
      </div>
    </div>
  );
}


export default App;