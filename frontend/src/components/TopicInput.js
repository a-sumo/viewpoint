import React, { useState } from 'react';

const TopicInput = ({ setTopic }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        setTopic(inputValue);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default TopicInput;