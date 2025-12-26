
let questions = [
    {
        question: "What is the capital of France?",
        option: ["Rome", "Paris", "Madrid", "Berlin"],
        correctAnswer: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        option: ["Earth", "Venus", "Mars", "Jupiter"],
        correctAnswer: 2
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        option: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correctAnswer: 1
    },
    {
        question: "How many days are there in a leap year?",
        option: ["364", "365", "366", "367"],
        correctAnswer: 2
    },
    {
        question: "What is the chemical symbol for water?",
        option: ["CO2", "H2O", "O2", "NH3"],
        correctAnswer: 1
    },
    {
        question: "What color are bananas when they are ripe?",
        option: ["Green", "Yellow", "Red", "Brown"],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswerIndex = null;

const questionEl = document.getElementById("questions");
const optionEl = document.getElementById("options");
const nextBtn = document.getElementById("next");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionEl.innerHTML = "";
    selectedAnswerIndex = null;
    nextBtn.disabled = true;

    currentQuestion.option.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => selectAnswer(button, index));
        optionEl.appendChild(button);
    });
}

function selectAnswer(button, index) {
    const optionButtons = optionEl.querySelectorAll(".option");
    optionButtons.forEach((btn) => btn.classList.remove("selected")); // Remove previous selection

    button.classList.add("selected"); // Highlight selected option
    selectedAnswerIndex = index; // Store selected answer
    nextBtn.disabled = false; // Enable the Next button
}

function handleNextQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswerIndex === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionEl.textContent = "Quiz Complete!";
    optionEl.innerHTML = `Your score is ${score} out of ${questions.length}`;
    nextBtn.style.display = "none";
}

nextBtn.addEventListener("click", handleNextQuestion);
displayQuestion();
