// Participant.js
import React, { useState } from 'react';
import Statement from './Statement';
import './Participant.css';

const Participant = ({ participant }) => {
    const [expandedTerm, setExpandedTerm] = useState(null);

    const handleTermClick = (term) => {
        if (expandedTerm === term) {
            setExpandedTerm(null);
        } else {
            setExpandedTerm(term);
        }
        console.log(term);
    };

    return (
        <div>
            <h2>{participant.name}</h2>
            {participant.statements.map((statement, index) => (
                <Statement
                    key={index}
                    statement={statement}
                    expandedTerm={expandedTerm}
                    onTermClick={() => handleTermClick}
                />
            ))}
        </div>
    );
};

export default Participant;
