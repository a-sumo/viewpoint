// Conversation.js
import React, { useState } from 'react';
import Statement from './Statement';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '20px',
    }
};
const Conversation = ({ dialogue }) => {
    const [expandedTerms, setExpandedTerms] = useState([]);


    const handleTermClick = (term) => {
        setExpandedTerms(prevTerms => {
            if (prevTerms.includes(term)) {
                return prevTerms.filter(t => t !== term);
            } else {
                return [...prevTerms, term];
            }
        });
    };

    const statements = dialogue.flatMap((participant) =>
        participant.statements.map((statement) => ({ ...statement, participant: participant.name }))
    );

    console.log(dialogue[0].participant);
    return (
        <div style={styles.container}>
            {statements.map((statement, index) => (
                <div key={index}>
                    <h2>{dialogue[index % 2].participant}</h2>
                    <Statement
                        key={index}
                        statement={statement}
                        expandedTerms={expandedTerms}
                        onTermClick={handleTermClick}
                    />
                </div>
            ))}
        </div>
    );
};

export default Conversation;
