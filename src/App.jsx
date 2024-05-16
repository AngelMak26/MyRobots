import React, { useState, useEffect } from 'react';
import searchRobots from './api';
import SearchBar from './components/SearchBar';
import RobotsList from './components/RobotsList';

function App() {
    const [robots, setRobots] = useState([]);

    useEffect(() => {
        const fetchRobots = async () => {
            const robotsData = await searchRobots();
            setRobots(robotsData);
        };

        fetchRobots();
    }, []);

    const handleSubmit = async (term) => {
        const robotsData = await searchRobots(term);
        setRobots(robotsData);
    };

    return (
        <div>
            <h1>MyRobots</h1>
            <SearchBar onSubmit={handleSubmit} />
            <RobotsList robots={robots} />
        </div>
    );
}

export default App;
