// mockData.js
export default [
    {
        participant: "Participant A",
        statements: [
            {
                index: 0,
                statement: "I believe affirmative action is necessary to address systemic inequalities in society.",
                level_of_abstraction_1: {
                    terms: ["affirmative action", "systemic inequalities"]
                },
                level_of_abstraction_2: {
                    definitions: {
                        "affirmative action": "A policy that aims to redress historic and ongoing discrimination by providing preferential treatment for underrepresented groups in education and employment.",
                        "systemic inequalities": "Deep-rooted disparities in access to opportunities and resources, resulting in unfair advantages for certain groups while disadvantaging others."
                    }
                }
            }
        ]
    },
    {
        participant: "Participant A",
        statements: [
            {
                index: 0,
                statement: "I disagree with affirmative action because it promotes reverse discrimination.",
                level_of_abstraction_1: {
                    terms: ["affirmative action", "reverse discrimination"]
                },
                level_of_abstraction_2: {
                    definitions: {
                        "affirmative action": "A policy that unfairly prioritizes certain groups based on their race or gender, resulting in discrimination against individuals from non-preferred groups.",
                        "reverse discrimination": "Discrimination against individuals from majority or non-preferred groups in an attempt to rectify past injustices, leading to an unfair disadvantage for them."
                    }
                }
            }
        ]
    }
];
