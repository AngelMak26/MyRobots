import React from 'react';

function Card({ name, email }) {
    return (
        <div className="card">
            <div className="card-content">
                <p className="title">{name}</p>
                <p className="subtitle">{email}</p>
            </div>
        </div>
    );
}

export default Card;
