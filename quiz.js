// Declare questions/answers

const quizHtmlCssBasic = [
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
        statement: "Nos profs sont Nico et Jérémy.",
        answers: ["Vrai", "Faux", "Maybe"],
        correctAnswer: "Vrai"
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
    }
]

// Declare score

let finalScore = 0;

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
// - Display right and wrong answers (green/red) TODO
// - Update score TODO

const answerButtons = document.querySelectorAll(".answer-button");

answerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.border = "2px solid black";
        disableFunc("#next-button");
        disableFunc(".answer-button");
    });
});

// Declare elements (for next-button event)

const questionNumber = document.querySelector("#question-number");
const questionStatement = document.querySelector("#question-statement");
const answerOne = document.querySelector(".answer1");
const answerTwo = document.querySelector(".answer2");
const answerThree = document.querySelector(".answer3");
const answerFour = document.querySelector(".answer4");
let rk = 0;

// Function for filling new questions

const fillQuestion = rk => {
    // Question
    questionNumber.innerText = "Question " + quizHtmlCssBasic[rk - 1].rank;
    // Enoncé
    questionStatement.innerHTML = quizHtmlCssBasic[rk - 1].statement;
    // Réponses
    if (((quizHtmlCssBasic[rk - 1]).answers)[0]) {
        answerOne.innerHTML = ((quizHtmlCssBasic[rk - 1]).answers)[0];
    } else {
        answerOne.innerHTML = "";
    };
    if (((quizHtmlCssBasic[rk - 1]).answers)[1]) {
        answerTwo.innerHTML = ((quizHtmlCssBasic[rk - 1]).answers)[1];
    } else {
        answerTwo.innerHTML = "";
    };
    if (((quizHtmlCssBasic[rk - 1]).answers)[2]) {
        answerThree.innerHTML = ((quizHtmlCssBasic[rk - 1]).answers)[2];
    } else {
        answerThree.innerHTML = "";
    };
    if (((quizHtmlCssBasic[rk - 1]).answers)[3]) {
        answerFour.innerHTML = ((quizHtmlCssBasic[rk - 1]).answers)[3];
    } else {
        answerFour.innerHTML = "";
    };
    // Réponses en boucle pas jouable ? Remplacer answerOne answerTwo avec string "answer"+rk ou autre ...
    // TODO (optimisation)
    /*
    for (let i = 0; i < 4; i++) {
        if (((quizHtmlCssBasic[rk - 1]).answers)[i]) {
            answerOne.innerHTML = ((quizHtmlCssBasic[rk - 1]).answers)[i];
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
// - Bring back initial style answer-buttons (initial colors & borders)
// - Only display non-empty answer-buttons

const nextButton = document.querySelector("#next-button");

nextButton.addEventListener("click", () => {
    rk++;
    fillQuestion(rk);
    disableFunc("#next-button");
    disableFunc(".answer-button");
    answerButtons.forEach(btn => {
        btn.style.border = "1px solid var(--background-light-color)";
        btn.style.backgroundColor = "rgba(241, 234, 221, 0.4)";
        btn.innerHTML !== "" ? btn.style.display = "block" : btn.style.display = "none";
    });
});

// After last question :
// - Display finalScore / in % ? / message / TODO

