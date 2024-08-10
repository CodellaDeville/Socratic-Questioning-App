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
    "What would happen if you let go of this belief?"
];

const emojis = [
    "🤔", // thinking face
    "💭", // thought balloon
    "💡", // light bulb
    "❤️", // heart
    "💖", // green heart
    "💕", // two hearts
    "🤷‍♀️", // shrugging face
    "🤷‍♂️", // shrugging face
    "😐", // neutral face
    "😑", // expressionless face
    "🤔", // thinking face
    "🙏", // hands together
    "💯", // hundred points
    "👀", // eyes
    "😊", // smiling face
    "🤝", // handshake
    "💔", // broken heart
    "😔", // disappointed face
    "😕", // pensive face
    "😞", // disheartened face
    "😟", // worried face
    "😠", // angry face
    "😡", // pouting face
    "😢", // crying face
    "😭", // sobbing face
];
let currentQuestionIndex = 0;
let userResponses = [];

document.getElementById('start-button').addEventListener('click', function() {
    console.log('Start button clicked!');
    document.getElementById('welcome-message').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    askQuestion();
});

function askQuestion() {
    const question = questions[currentQuestionIndex];
    const emoji = emojis[currentQuestionIndex % emojis.length]; // use modulus to cycle through emojis
    document.getElementById('question').innerHTML = question;
    document.getElementById('emoji').innerHTML = emoji;
    document.getElementById('response').value = '';
}

document.getElementById('submit-button').addEventListener('click', function() {
    const response = document.getElementById('response').value;
    console.log(`Response: ${response}`);
    userResponses.push(response);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        askQuestion();
    } else {
        console.log('No more questions!');
        displayResults();
    }
});

document.getElementById('next-button').addEventListener('click', function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        askQuestion();
    } else {
        console.log('No more questions!');
        displayResults();
    }
});

document.getElementById('exit-button').addEventListener('click', function() {
    console.log('Exit button clicked!');
    if (confirm("Are you sure you want to exit?")) {
        window.location.href = "about:blank";
    }
});

document.getElementById('exit-button-2').addEventListener('click', function() {
    console.log('Exit button clicked!');
    if (confirm("Are you sure you want to exit?")) {
        window.location.href = "about:blank";
    }
});

document.getElementById('exit-button-3').addEventListener('click', function() {
    console.log('Exit button clicked!');
    if (confirm("Are you sure you want to exit?")) {
        window.location.href = "about:blank";
    }
});

function displayResults() {
    console.log('Displaying results!');
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
    const resultsHtml = userResponses.map((response, index) => {
        return `<p>Question ${index + 1}: ${questions[index]}</p><p>Response: ${response}</p>`;
    }).join('');
    document.getElementById('results').innerHTML = resultsHtml;
}
This code includes the following features:
A list of questions to guide the user through the Socratic questioning process
A list of emojis to display with each question
Event listeners to handle user interactions (e.g., clicking the start button, submitting responses, navigating to the next question, and exiting the app)
Functions to ask questions, display results, and handle user input
Note that this code assumes you have already created the HTML and CSS files for the app, and that you have linked the JavaScript file to the HTML file using a <script> tag.
Generated by Meta Llama 3.1-405B
