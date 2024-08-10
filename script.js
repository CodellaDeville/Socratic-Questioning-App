const questions = [
    // ... (questions remain the same)
];

const emojis = ["😊", "😃", "😉", "🤔", "😌", "🤗", "👋"];

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
    window.close();
});

document.getElementById('exit-button-2').addEventListener('click', function() {
    console.log('Exit button clicked!');
    window.close();
});

document.getElementById('exit-button-3').addEventListener('click', function() {
    console.log('Exit button clicked!');
    window.close();
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
