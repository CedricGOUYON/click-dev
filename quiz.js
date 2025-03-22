// Declare questions/answers

const quizHtmlBasic = [
    "HTML Basics",
    {
        rank: 1,
        statement: "Le logo de la Wild est vert.",
        answers: ["Vrai", "Faux"],
        correctAnswer: "Faux"
    },
    {
        rank: 2,
        statement: "HTML signifie HyperText Markup Language.",
        answers: ["Vrai"],
        correctAnswer: "Vrai"
    },
    {
        rank: 3,
        statement: "Nos profs sont Michel et Jean-François.",
        answers: ["Vrai", "Faux", "Maybe"],
        correctAnswer: "Faux"
    },
    {
        rank: 4,
        statement: "Anthony est supporter du PSG.",
        answers: ["Vrai", "Faux", "Maybe", "On parle de foot?"],
        correctAnswer: "Faux"
    },
    {
        rank: 5,
        statement: "La plupart de notre promo vient de l'Ouest de la France.",
        answers: ["Vrai", "Faux"],
        correctAnswer: "Vrai"
    },
    {
        rank: 6,
        statement: "Le chien de mon voisin s'appelle Saturnin",
        answers: ["Vrai", "Faux", "Je ne sais pas"],
        correctAnswer: "Je ne sais pas"
    }
]

// Declare score

let finalScore = 0;

// Declare colors

const rightAnswerColor = "rgba(161, 234, 31, 0.4)";
const wrongAnswerColor = "rgba(234, 172, 131, 0.4)";

// Declare elements (for next-button event)

const questionNumber = document.querySelector("#question-number");
const questionStatement = document.querySelector("#question-statement");
const answerOne = document.querySelector(".answer1");
const answerTwo = document.querySelector(".answer2");
const answerThree = document.querySelector(".answer3");
const answerFour = document.querySelector(".answer4");
let rk = 0;

// Display Subject

const quizTitle = document.querySelector("#quiz-title");
quizTitle.innerHTML = quizHtmlBasic[0];

// Function !Disable element (à remplacer par lock/unlock pour gagner en clarté si bug)

const disableFunc = elementSelector => {
    const elementsToDisable = document.querySelectorAll(elementSelector);
    if (elementsToDisable) {
        elementsToDisable.forEach(elem => elem.disabled = !elem.disabled);
    }
}

// Click on any answer-button :
// - Unlock next-button
// - Disable all answer-buttons
// - Display the answer (black border)
// - Update score
// - Display right and wrong answers (green/red)

const answerButtons = document.querySelectorAll(".answer-button");

answerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.border = "3px solid black";
        disableFunc("#next-button");
        disableFunc(".answer-button");
        // Update score
        if (btn.innerHTML === (quizHtmlBasic[rk]).correctAnswer) {
            finalScore++;
            console.log(`current score is : ${finalScore}`);
        }
        // Display right and wrong answers (green/red)
        switch ((quizHtmlBasic[rk]).correctAnswer) {
            case answerOne.innerHTML:
                answerOne.style.backgroundColor = rightAnswerColor;
                answerTwo.style.backgroundColor = wrongAnswerColor;
                answerThree.style.backgroundColor = wrongAnswerColor;
                answerFour.style.backgroundColor = wrongAnswerColor;
                break;
            case answerTwo.innerHTML:
                answerOne.style.backgroundColor = wrongAnswerColor;
                answerTwo.style.backgroundColor = rightAnswerColor;
                answerThree.style.backgroundColor = wrongAnswerColor;
                answerFour.style.backgroundColor = wrongAnswerColor;
                break;
            case answerThree.innerHTML:
                answerOne.style.backgroundColor = wrongAnswerColor;
                answerTwo.style.backgroundColor = wrongAnswerColor;
                answerThree.style.backgroundColor = rightAnswerColor;
                answerFour.style.backgroundColor = wrongAnswerColor;
                break;
            case answerFour.innerHTML:
                answerOne.style.backgroundColor = wrongAnswerColor;
                answerTwo.style.backgroundColor = wrongAnswerColor;
                answerThree.style.backgroundColor = wrongAnswerColor;
                answerFour.style.backgroundColor = rightAnswerColor;
                break;
            default:
                console.log(`Right answer not detected !`);
        }
    });
});

// Function for filling new questions

const fillQuestion = rk => {
    // Question
    questionNumber.innerText = "Question " + quizHtmlBasic[rk].rank;
    // Statement
    questionStatement.innerHTML = quizHtmlBasic[rk].statement;
    // Answers
    if (((quizHtmlBasic[rk]).answers)[0]) {
        answerOne.innerHTML = ((quizHtmlBasic[rk]).answers)[0];
    } else {
        answerOne.innerHTML = "";
    };
    if (((quizHtmlBasic[rk]).answers)[1]) {
        answerTwo.innerHTML = ((quizHtmlBasic[rk]).answers)[1];
    } else {
        answerTwo.innerHTML = "";
    };
    if (((quizHtmlBasic[rk]).answers)[2]) {
        answerThree.innerHTML = ((quizHtmlBasic[rk]).answers)[2];
    } else {
        answerThree.innerHTML = "";
    };
    if (((quizHtmlBasic[rk]).answers)[3]) {
        answerFour.innerHTML = ((quizHtmlBasic[rk]).answers)[3];
    } else {
        answerFour.innerHTML = "";
    };
    // Réponses en boucle faisable ? Remplacer answerOne answerTwo avec string "answer"+rk ou autre ...
    // TODO (optimisation)
    /*
    for (let i = 0; i < 4; i++) {
        if (((quizHtmlBasic[rk]).answers)[i]) {
            answerOne.innerHTML = ((quizHtmlBasic[rk]).answers)[i];
        } else {
            answerOne.innerHTML = "";
        }
    }
    */
}

// Click on next-button :
// - Increment question rank
// - Fill next question
// - Disable next-button
// - Unable answer-buttons
// - Reset initial style answer-buttons (initial colors & borders)
// - Only display non-empty answer-buttons
// - After last question : 
//          - display final score
//          - display message TODO
//          - display 2 buttons (retry & go back to menu) TODO

const nextButton = document.querySelector("#next-button");

nextButton.addEventListener("click", () => {
    rk++;
    if (rk < quizHtmlBasic.length) { // If another question exists
        fillQuestion(rk);
        disableFunc("#next-button");
        disableFunc(".answer-button");
        // Reset initial style
        answerButtons.forEach(btn => {
            btn.style.border = "1px solid var(--background-light-color)";
            btn.style.backgroundColor = "rgba(241, 234, 221, 0.4)";
            btn.innerHTML !== "" ? btn.style.display = "block" : btn.style.display = "none";
        });
    } else { // If it was the last question
        questionNumber.innerText = "";
        questionStatement.innerHTML = `Score final : ${finalScore}/${rk} <br> blablabla <br> blabla`;
        answerButtons.forEach(btn => {
            btn.style.display = "none";
        });
    }
});