import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RobotsList from './components/RobotsList';
import searchRobots from './api';

function App() {
    const [robots, setRobots] = useState([]);

    useEffect(() => {
        const fetchRobots = async () => {
            try {
                const result = await searchRobots();
                setRobots(result);
            } catch (error) {
                console.error('Error fetching robots:', error);
            }
        };

        fetchRobots();
    }, []);

    return (
        <div>
            <SearchBar />
            <RobotsList robots={robots} />
        </div>
    );
}

export default App;
