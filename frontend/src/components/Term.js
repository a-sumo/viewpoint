import React from 'react';
import './Term.css';

const Term = ({ term, hasDefinition, onClick }) => {
    if (hasDefinition) {
        return (
            <button
                style={styles.button}
                onMouseEnter={e => Object.assign(e.currentTarget.style, styles.buttonHover)}
                onMouseLeave={e => Object.assign(e.currentTarget.style, styles.button)}
                onClick={() => {
                    console.log(`Term ${term} was clicked.`);
                    if (typeof onClick === 'function') { 
                        onClick(term);
                      }
                }}
            >
                {term}
            </button>
        );
    }
    return <span>{term}</span>;
};

// create style for term, button and button hover

const styles = {    
    button: {
        borderRadius: '10px',
        backgroundColor: '#f2f7f7',
        backgroundOpacity: '0.5',
        border: 'none',
        color: 'black',
        padding: '5px 10px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '2px 2px',
        cursor: 'pointer',
    },
    // hover button

    buttonHover: {
        borderRadius: '10px',
        backgroundColor: '#e5e2e5',
        backgroundOpacity: '0.5',
        border: 'none',
        color: 'black',
        padding: '5px 10px',
        textAlign: 'center',  
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '2px 2px',
        cursor: 'pointer',
        boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
        transition: 'box-shadow 0.3s ease-in-out',
    },

    term: {
        color: 'blue',
        fontWeight: 'bold',
    },
};

export default Term;