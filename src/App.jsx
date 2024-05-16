import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RobotsList from './components/RobotsList';
import searchRobots from './api';

function App() {
    const [robots, setRobots] = useState([]);

    const handleSubmit = async (term) => {
        try {
            const result = await searchRobots(term);
            setRobots(result);
        } catch (error) {
            console.error('Error searching robots:', error);
        }
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <RobotsList robots={robots} />
        </div>
    );
}

export default App;
