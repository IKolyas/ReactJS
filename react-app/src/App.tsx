import React from 'react';
import './App.css';
import Message from "./components/Message";


function App() {
    return (
    <div className="App">
      <header className="App-header">
          <Message name="React"/>
      </header>
    </div>
  );
}

export default App;