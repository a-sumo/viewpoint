
// Statement.js
import React from 'react';
import Term from './Term';
import { useState, useEffect } from 'react';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px',
        backgroundColor: '#f2f7f7',
    }
};
const Statement = ({ statement, expandedTerms, onTermClick }) => {
    const [expandedTerm, setExpandedTerm] = useState(null);

    useEffect(() => {
        setExpandedTerm(expandedTerms.find(term => statement.level_of_abstraction_1.terms.includes(term)));
    }, [expandedTerms, statement.level_of_abstraction_1.terms]);

    const termsPattern = new RegExp(`\\b(${statement.level_of_abstraction_1.terms.join('|')})\\b`, 'g');
    const chunks = statement.statement.split(termsPattern);

    const mergedChunks = chunks.reduce((acc, chunk) => {
        const isTerm = statement.level_of_abstraction_1.terms.includes(chunk);
        const hasDefinition = isTerm && statement.level_of_abstraction_2.definitions[chunk];
        // if the chunk has a definition and the last chunk in the accumulator has the same definition, merge them
        if (hasDefinition && acc.length > 0 && acc[acc.length - 1].definition === statement.level_of_abstraction_2.definitions[chunk]) {
            acc[acc.length - 1].text += ' ' + chunk;
        } else {
            acc.push({
                text: chunk,
                definition: hasDefinition ? statement.level_of_abstraction_2.definitions[chunk] : null
            });
        }
        return acc;
    }, []);

    return (
        <div >
            {mergedChunks.map((chunk, index) => (
                <Term
                    key={index}
                    term={chunk.text}
                    hasDefinition={!!chunk.definition}
                    onClick={typeof onTermClick === 'function' ? () => onTermClick(chunk.text) : undefined} // Check if onTermClick is a function before passing it
                />
            ))}
            {expandedTerm && (
                <div>
                    <strong>{expandedTerm}: </strong>
                    {statement.level_of_abstraction_2.definitions[expandedTerm]}
                </div>
            )}
        </div>
    );
};

export default Statement;
