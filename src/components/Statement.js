
// Statement.js
import React from 'react';
import Term from './Term';

const Statement = ({ statement, expandedTerm, onTermClick }) => {
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
        <div>
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
