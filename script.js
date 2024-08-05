const questions = [
    "What would you tell a friend in this situation?",
    "What evidence supports your thought?",
    "What evidence contradicts your thought?",
    "What is an alternative explanation?",
    "What is the worst that could happen? How could you cope with that?",
    "What is the best that could happen?",
    "What is the most likely outcome?"
];

const emojis = ["😊", "😃", "😉", "🤔", "😌", "🤗", "👋"];

function askAnotherQuestion() {
    const questionElement = document.getElementById('question');
    const responseElement = document.getElementById('response');
    
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    questionElement.textContent = `Socratic Question: ${randomQuestion}`;
    
    // Clear the response input field
    responseElement.value = '';
    
    // Provide feedback with a random emoji
    const emojiElement = document.getElementById('emoji');
    emojiElement.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Display a pop-up alert for fun
    alert("Great answer! Here's another question.");
}

function endApp() {
    const questionElement = document.getElementById('question');
    const responseElement = document.getElementById('response');
    const emojiElement = document.getElementById('emoji');
    
    questionElement.textContent = 'Goodbye! Remember to practice positive thinking.';
    responseElement.style.display = 'none';
    emojiElement.textContent = '👋';
    
    // Hide buttons
    document.getElementById('buttons').style.display = 'none';
    
    // Display a farewell pop-up alert
    alert("Thank you for using the Socratic Questioning App. Goodbye!");
}
