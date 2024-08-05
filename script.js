const questions = [
    "What would you tell a friend in this situation?",
    "What evidence supports your thought?",
    "What evidence contradicts your thought?",
    "What is an alternative explanation?",
    "What is the worst that could happen? How could you cope with that?",
    "What is the best that could happen?",
    "What is the most likely outcome?",
    "Why do you think that?",
    "What assumptions are you making?",
    "Is there a different perspective?",
    "What is the root cause of this belief?",
    "What would change your mind?",
    "How does this belief serve you?",
    "What is the counterargument?",
    "Can you find an example that disproves this thought?",
    "How would you argue against this belief?",
    "Is this belief based on emotions or facts?",
    "What are the consequences of believing this?",
    "Who might disagree with this belief and why?",
    "What if the opposite were true?",
    "How did you come to this conclusion?",
    "What other explanations could there be?",
    "What are you afraid of?",
    "What is the best evidence for and against this belief?",
    "How would you explain this belief to a child?",
    "What are the benefits and drawbacks of this belief?",
    "How does this belief align with your values?",
    "What would you do if you weren’t afraid?",
    "What advice would you give someone else with this belief?",
    "What if you are wrong?",
    "What would happen if you let go of this belief?",
    "Is this belief helping or hindering you?",
    "What are you willing to sacrifice for this belief?",
    "What is the evidence for and against this belief?",
    "Is there a more positive way to look at this?",
    "What would someone you respect say about this belief?",
    "What if this belief didn’t exist?",
    "How can you test this belief?",
    "What would change if you adopted an alternative belief?",
    "Is this belief consistent with reality?",
    "What are the historical and cultural contexts of this belief?",
    "How does this belief impact your relationships?",
    "What past experiences influence this belief?",
    "What are the logical implications of this belief?",
    "How does this belief affect your daily life?",
    "Is there a middle ground in this belief?",
    "What do you stand to gain or lose by holding this belief?",
    "How does this belief affect your mental and emotional state?",
    "What new information could change your perspective on this belief?",
    "What are the long-term effects of holding this belief?"
];

const emojis = ["😊", "😃", "😉", "🤔", "😌", "🤗", "👋"];

function startApp() {
    document.getElementById('welcome-message').style.display = 'none';
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('question').style.display = 'block';
    document.getElementById('response').style.display = 'block';
    document.getElementById('buttons').style.display = 'block';
    askAnotherQuestion();
}

functi
