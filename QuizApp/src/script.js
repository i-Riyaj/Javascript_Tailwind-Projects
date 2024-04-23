const questions = [
    {
        question: "Who was the first Prime Minister of India?",
        answers: [
            {text: "Indira Gandhi", bool: false},
            {text: "Narendra Modi", bool: false},
            {text: "Jawaharlal Nehru", bool: true},
            {text: "Rajiv Gandhi", bool: false},
        ]
    },
    {
        question: "Which state is also known as the “Fruit Bowl” of India?",
        answers: [
            {text: "Assam", bool: false},
            {text: "Jammu and Kashmir", bool: false},
            {text: "Himachal Pradesh", bool: true},
            {text: "Meghalaya", bool: false},
        ]
    },
    {
        question: "Who is popularly known as the “Iron Man” of India?",
        answers: [
            {text: "Lal Bahadur Shastri", bool: false},
            {text: "Sardar Vallabh Bhai Patel", bool: true},
            {text: "Mahatma Gandhi", bool: false},
            {text: "Dr. B.R Ambedkar", bool: false},
        ]
    },
    {
        question: "Who is the current President of India?",
        answers: [
            {text: "Ram Nath Kovind", bool: false},
            {text: "A. P. J. Abdul Kalam", bool: false},
            {text: "Pranab Mukherjee", bool: false},
            {text: "Draupadi Murmu", bool: true},
        ]
    },
    {
        question: "Which place in India is also known as the “Land of Rising Sun”?",
        answers: [
            {text: "Sikkim", bool: false},
            {text: "Karnataka", bool: false},
            {text: "West Bengal", bool: false},
            {text: "Arunachal Pradesh", bool: true},
        ]
    },
];

const questionElement = document.querySelector('.question');
const answerBtnSection = document.querySelector('.answerBtnSection');
const nextBtn = document.querySelector('#nextBtn');
const nextFinishSection = document.querySelector('.nextFinishSection');

let currentQuestionIndex = 0;
let score = 0;

function quizHome () {
    const startBTN = document.createElement('button');
    startBTN.innerHTML = "Start Quiz";
    startBTN.classList.add('px-5', 'bg-black', 'text-white', 'py-2', 'rounded', 'hover:bg-slate-600');
    answerBtnSection.appendChild(startBTN);
    startBTN.addEventListener('click', startQuiz);
}

quizHome();

function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion () {
    resetState();
    let currentQuiz = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuiz.question}`;
    showAnswers(currentQuiz);
}

function resetState () {
    nextBtn.style.display = "none";
    while(answerBtnSection.firstChild){
        answerBtnSection.removeChild(answerBtnSection.firstChild);
    } 
}

function showAnswers (currentQuiz) {
    currentQuiz.answers.forEach((answer)=>{
        const Btn = document.createElement('button');
        Btn.innerHTML = answer.text;
        Btn.classList.add('answerBtn', 'hover:bg-slate-400', 'hover:text-white', 'rounded', 'font-medium', 'border-solid', 'border-[1px]', 'border-black', 'text-start', 'w-full', 'px-3', 'py-2');
        answerBtnSection.appendChild(Btn);
        if(answer.bool){
            Btn.dataset.bool = answer.bool;
            // this code checks if the bool property of the answer object is truthy, and if so, it assigns that value to a custom data attribute called bool on an HTML element referred to as Btn
        }
        Btn.addEventListener('click', (e)=>selectAnswer(e));
    })
}

function selectAnswer (e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.bool === "true";
    if(isCorrect){
        selectBtn.classList.add('correct');
        score++;
    }
    else {
        selectBtn.classList.add('incorrect');
    }
    handleWrongAnswer();
}

function handleWrongAnswer () {
    Array.from(answerBtnSection.children).forEach(button => {
        if(button.dataset.bool === "true"){
            button.classList.add('correct');
        }
        button.disabled = true;
        button.classList.remove('hover:bg-slate-400', 'hover:text-white');
        button.classList.add('cursor-not-allowed');
    })
    nextBtn.style.display = "block";
}

nextBtn.addEventListener('click', (e) => {
    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    }
    else {
        e.target.parentNode.removeChild(e.target.parentNode.firstElementChild.nextElementSibling);
        startQuiz();
    }
});

function handleNextBtn () {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else {
        showScore();
    }
}

function showScore () {
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}.`;
    nextBtn.innerHTML = 'Play Again';
    nextBtn.style.display = "block";
    finishQuiz();
}

function finishQuiz () {
    const finishBtn = document.createElement('button');
    finishBtn.innerHTML = "Finish";
    finishBtn.classList.add('px-5', 'py-2', 'bg-black', 'text-white', 'rounded', 'font-bold', 'hover:bg-slate-600');
    nextFinishSection.appendChild(finishBtn);
    finishBtn.addEventListener('click', (finishBtn) => cleanUp(finishBtn));
    
}

function cleanUp (finishBtn) {
    nextFinishSection.removeChild(nextFinishSection.firstElementChild.nextElementSibling);
    questionElement.innerHTML = "";
    resetState();
    quizHome();
}





