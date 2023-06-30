import React from 'react';
import './Term.css';

const Term = ({ term, hasDefinition, onClick }) => {
    if (hasDefinition) {
        return (
            <button
                style={{ borderRadius: '10px' }}
                onClick={() => {
                    console.log(`Term ${term} was clicked.`);
                    if (typeof onClick === 'function') { // check if onClick is a function
                        onClick();
                      }
                }}
            >
                {term}
            </button>
        );
    }
    return <span>{term}</span>;
};


export default Term;