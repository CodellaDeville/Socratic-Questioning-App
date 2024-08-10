const questions = [
    // ... (same as before)
];

const emojis = ["😊", "😃", "😉", "🤔", "😌", "🤗", "👋"];

let currentQuestionIndex = 0;
let userIssue = '';

function startApp() {
    userIssue = document.getElementById('user-issue').value;
    if (userIssue.trim() === '') {
        alert('Please describe your issue before starting.');
        return;
    }
    document.getElementById('welcome-message').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    askAnotherQuestion();
}

function askAnotherQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestionIndex = randomIndex;
    const question = questions[randomIndex];
    const emoji = emojis[randomIndex % emojis.length]; // Ensure we don't go out of bounds
    document.getElementById('question').innerHTML = question;
    document.getElementById('emoji').innerHTML = emoji;
    document.getElementById('response').value = '';
}

function submitResponse() {
    const response = document.getElementById('response').value;
    console.log(`Response: ${response}`);
    if (response.trim() === '') {
        alert('Please provide a response.');
        return;
    }
    const feedback = givePersonalizedFeedback(response);
    alert(feedback);
}

function givePersonalizedFeedback(response) {
    if (response.toLowerCase().includes('uncertain')) {
        return "It seems you're feeling uncertain. Have you considered writing down your thoughts to gain clarity?";
    }
    // Add more feedback conditions as needed
    return "Thank you for your response. Keep challenging your thoughts.";
}

document.getElementById('start-button').addEventListener('click', startApp);
document.getElementById('submit-button').addEventListener('click', submitResponse);
document.getElementById('next-button').addEventListener('click', askAnotherQuestion);
