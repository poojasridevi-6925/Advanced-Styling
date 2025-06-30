const questions = [
    { q: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { q: "Capital of India?", options: ["Delhi", "Mumbai", "Chennai"], answer: "Delhi" }
];
let index = 0, score = 0;

function loadQuestion() {
    const q = questions[index];
    document.getElementById("question").textContent = q.q;
    const opts = q.options.map(opt => \`<button onclick="checkAnswer('\${opt}')">\${opt}</button>\`).join("");
    document.getElementById("options").innerHTML = opts;
}

function checkAnswer(selected) {
    if (selected === questions[index].answer) score++;
}

function nextQuestion() {
    index++;
    if (index < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = \`<h2>Score: \${score}</h2>\`;
    }
}

loadQuestion();