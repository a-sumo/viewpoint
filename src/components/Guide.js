import React from 'react';
import './Guide.css';

const Guide = ({ showGuide }) => {
  return (
    <div className={`guide-container ${showGuide ? '' : 'hide-guide'}`}>
      <h1>Statement Unfolding </h1>
      <h2>Welcome!</h2>
      <p>This application lets you explore a conversation between two characters, Alex and Bob, who have differing depths of knowledge and experience on the topic of Affirmative Action.</p>
      <p>Alex tends to have a more shallow understanding and often speaks with verbosity but lack of coherence, whereas Bob's statements are less verbose but more grounded and consistent.</p>
      <h2>How to Use the App</h2>
      <p>Every statement in the conversation has key terms that are highlighted. You can click on these terms to unfold their definitions, as understood by the speaker.</p>
      <p>Each term's definition reflects the knowledge and biases of the speaker, providing an additional layer of context to the conversation. This allows you to better understand their perspective and the depth (or lack thereof) of their understanding.</p>
      <p>Note that the definitions are individual to each speaker and the same term might have different definitions depending on who's speaking!</p>
      <p>Enjoy exploring the conversation and deepening your understanding of the complexities behind each statement!</p>
    </div>
  );
};

export default Guide;

