import React, { useState } from 'react';

const Term = ({ term, definition, onClick }) => {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <div
      style={definition ? styles.button : styles.buttonWithoutDefinition}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        console.log(`Term ${term} was clicked.`);
        setClick(!click);
        if (typeof onClick === 'function') {
          onClick(term);
        }
      }}
    >
      {term}
      {(hover || click) && definition && (
        <div style={styles.definition}>
          {definition}
        </div>
      )}
    </div>
  );
};


// create style for term, button and button hover

const styles = {    
    button: {
        borderRadius: '10px',
        backgroundColor: '#f2f7f7',
        backgroundOpacity: '0.5',
        border: 'none',
        color: 'black',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '2px 2px',
        cursor: 'pointer',
    },
    buttonWithoutDefinition: {
        borderRadius: '10px',
        backgroundColor: 'transparent',
        backgroundOpacity: '0.5',
        border: 'none',
        color: 'black',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '2px 2px',
    },
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
    definition: {
        backgroundColor: '#eee',
        padding: '5px',
        borderRadius: '5px',
        marginTop: '5px',
      },
    
};

export default Term;