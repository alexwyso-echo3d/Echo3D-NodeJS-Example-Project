import './App.css';
import '@google/model-viewer';
import { Echo } from 'echo3d';
import React, { useState } from 'react';
import './App.css';
import logo from './echo3D_logo_dark.png';

function App() {
  const [apiKey, setApiKey] = useState('');
  const [securityKey, setSecurityKey] = useState('');
  const [entryId, setEntryId] = useState('');
  const [echoElement, setEchoElement] = useState();
  const [isModelShown, setIsModelShown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEchoElement(<Echo apiKey={apiKey} securityKey={securityKey} entryID={entryId}></Echo>);
    setIsModelShown(true);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setEntryId('');
    setEchoElement(null);
    setIsModelShown(false)
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt="Logo"/>
        <span> Example Node.js Project</span>
      </div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <label htmlFor="api-key">API Key:</label>
        <input
          type="text"
          id="api-key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <label htmlFor="security-key">Security Key:</label>
        <input
          type="text"
          id="security-key"
          value={securityKey}
          onChange={(e) => setSecurityKey(e.target.value)}
        />
        <label htmlFor="entry-id">Entry ID:</label>
        <input
          type="text"
          id="entry-id"
          value={entryId}
          onChange={(e) => setEntryId(e.target.value)}
        />
        {!isModelShown ? (
          <button type="submit">VIEW MODEL</button>
        ) : ""}
        {isModelShown ? (
          <button type="reset">RESET</button>
        ) : ""}
      </form>
      <div className="image-container">
        {echoElement}
      </div>
    </div>
  );
}

export default App;
