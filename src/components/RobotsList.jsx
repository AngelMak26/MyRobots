import React from 'react';
import Card from './Card';

function RobotsList({ robots }) {
    const renderRobots = robots.map((robot) => (
        <Card key={robot.id} name={robot.name} email={robot.email} />
    ));

    return <div>{renderRobots}</div>;
}

export default RobotsList;
