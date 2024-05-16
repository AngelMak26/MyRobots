// App.js
import React, { useState } from 'react';
import { searchRobots } from './api';
import SearchBar from './components/SearchBar';
import RobotsList from './components/RobotsList';

function App() {
  const [robots, setRobots] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchRobots(term);
    setRobots(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <RobotsList robots={robots} />
    </div>
  );
}

export default App;
