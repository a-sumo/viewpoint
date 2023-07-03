// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Statement from './Statement';
// import TopicInput from './TopicInput';

// const Conversation = ({ dialogue }) => {
//   const [expandedTerms, setExpandedTerms] = useState([]);
//   const [topic, setTopic] = useState('');
//   const [conversation, setConversation] = useState(null);
//   useEffect(() => {
//     if (topic) {
//       const prompt = `Create a conversation on ${topic} wherein the two participants have vastly different levels of historical knowledge on the subject, 
//             life experiences relevant to the subject and depth of genuine previous reflection on the subject. As a result, though they may use similar terminology, 
//             their words would have very different definitions and as a result alter the flow of meaning in very different ways. 
//             Think of a discussion as a computer program that involves code from multiple parties. 
//             Uttered sentences are the highest level of abstraction. 
//             The two parties' respective codebases may contain functions with identical names and even similar intended purposes, 
//             but with vastly different actual functional properties. 
//             Keep the conversation short enough to decompose each key term into parts and highlighting how both parties use the same term but *effectively* operate on very different levels of abstraction. 
//             Highlight how two parties may engage in meaningful conversation by being on different level of abstraction but aligned functional properties and fail to engage in meaningful conversation despite 
//             having the same level of depth but very different functional properties. These differences may, for instance, be caused by individual biases they are unaware of. 
//             Unpack the the statements of both parties with their definitions for each key term, and show how, as we unpack the definitions, we notice mismatches and incoherence, 
//             that may go unnoticed when not addressed directly. 
//             The participants must reply to one another and the conversation must have a coherent flow. 
//             The output should be in the following format:
//             {
//               "dialogue": [
//                 {
//                   "participant": "",
//                   "statements": [
//                     {
//                       "index": 0,
//                       "statement": "",
//                       "level_of_abstraction_1": {
//                         "terms": []
//                       },
//                       "level_of_abstraction_2": {
//                         "definitions": {}
//                       }
//                     },
//                     // Further statements...
//                   ]
//                 },
//                 // Further participants...
//               ]
//             }`;
//       const fetchConversation = async () => {
//         try {
//           const response = await axios.post('http://localhost:5432/api/conversation', {
//             message: prompt,
//           });

//           const data = JSON.parse(response.data);

//           setConversation(data);
//         } catch (error) {
//           console.error(error);
//         }
//       };

//       fetchConversation();

//     }
//   }, [topic]);

//   const handleTermClick = (term) => {
//     setExpandedTerms(prevTerms => {
//       if (prevTerms.includes(term)) {
//         return prevTerms.filter(t => t !== term);
//       } else {
//         return [...prevTerms, term];
//       }
//     });
//   };

//   const statements = dialogue.flatMap((participant) =>
//     participant.statements.map((statement) => ({ ...statement, participant: participant.name }))
//   );

//   return (
//     <div style={styles.container}>
//       <TopicInput setTopic={setTopic} />
//       {statements.map((statement, index) => (
//         <div key={index}>
//           <h2>{dialogue[index % 2].participant}</h2>
//           <Statement
//             key={index}
//             statement={statement}
//             expandedTerms={expandedTerms}
//             onTermClick={handleTermClick}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Conversation;


// Conversation.js
import React, { useState } from 'react';
import mockData from './mockData';
import Statement from './Statement';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px',
  }
};

const Conversation = () => {
  const [dialogue, setDialogue] = useState(mockData);
  const [expandedTerms, setExpandedTerms] = useState([]);

  const statements = dialogue.flatMap((participant) =>
    participant.statements.map((statement) => ({ ...statement, participant: participant.name }))
  );

  const handleTermClick = (term) => {
    setExpandedTerms(prevTerms => {
      if (prevTerms.includes(term)) {
        return prevTerms.filter(t => t !== term);
      } else {
        return [...prevTerms, term];
      }
    });
  };

  return (
    <div style={styles.container}>
      {/* <TopicInput setTopic={setTopic} /> */}
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