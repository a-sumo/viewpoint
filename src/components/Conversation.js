// Conversation.js
import React, { useState } from 'react';
import Participant from './Participant';
import Statement from './Statement';

const Conversation = ({ dialogue }) => {
    const statements = dialogue.flatMap((participant) =>
        participant.statements.map((statement) => ({ ...statement, participant: participant.name }))
    );

    return (
        <div>
            {statements.map((statement, index) => (
                <div key={index}>
                    <h2>{statement.participant}</h2>
                    <Statement statement={statement} />
                </div>
            ))}
        </div>
    );
};
export default Conversation;

