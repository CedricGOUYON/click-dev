// Declare questions/answers

const quizHtmlBasic = [
    "HTML Basics",
    {
        statement: "Que signifie HTML ?",
        answers: ["High Transmission Mail List", "HighTide Mixed Literacy", "HyperText Markup Language", "Hello To My Lawyer"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        statement: "Citez un attribut HTML lié aux images",
        answers: ["class", "href", "src", "img"],
        correctAnswer: "src"
    },
    {
        statement: "Quelle est la balise racine d'un document HTML ?",
        answers: ["&lt;body&gt;", "&lt;head&gt;", "&lt;html&gt;", "&lt;!DOCTYPE&gt;"],
        correctAnswer: "&lt;html&gt;"
    },
    {
        statement: "Quel élément crée un saut de ligne ?",
        answers: ["&lt;lb&gt;", "&lt;break&gt;", "&lt;br&gt;", "&lt;newline&gt;"],
        correctAnswer: "&lt;br&gt;"
    },
    {
        statement: "Quelle balise est utilisée pour une liste non ordonnée ?",
        answers: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
        correctAnswer: "&lt;ul&gt;"
    },
    {
        statement: "Quel attribut est obligatoire pour les balises &lt;img&gt; ?",
        answers: ["title", "src", "link", "name"],
        correctAnswer: "src"
    },
    {
        statement: "Quelle balise contient le contenu principal visible d'une page ?",
        answers: ["&lt;main&gt;", "&lt;head&gt;", "&lt;body&gt;", "&lt;content&gt;"],
        correctAnswer: "&lt;body&gt;"
    },
    {
        statement: "Comment créer un lien vers une autre page ?",
        answers: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"],
        correctAnswer: "&lt;a&gt;"
    },
    {
        statement: "Quelle syntaxe est correcte pour un commentaire HTML ?",
        answers: ["// Commentaire", "&lt;!-- Commentaire --&gt;", "/* Commentaire */", "** Commentaire **"],
        correctAnswer: "&lt;!-- Commentaire --&gt;"
    },
    {
        statement: "Quel élément HTML5 spécifie un contenu autonome ?",
        answers: ["&lt;div&gt;", "&lt;article&gt;", "&lt;section&gt;", "&lt;content&gt;"],
        correctAnswer: "&lt;article&gt;"
    },
    {
        statement: "Quel élément est utilisé pour un formulaire ?",
        answers: ["&lt;form&gt;", "&lt;input&gt;", "&lt;submit&gt;", "&lt;action&gt;"],
        correctAnswer: "&lt;form&gt;"
    },
    {
        statement: "Quel attribut définit le type d'un input ?",
        answers: ["type", "name", "value", "id"],
        correctAnswer: "type"
    },
    {
        statement: "Quelle balise crée un en-tête de niveau 1 ?",
        answers: ["&lt;h&gt;", "&lt;header&gt;", "&lt;h1&gt;", "&lt;head1&gt;"],
        correctAnswer: "&lt;h1&gt;"
    },
    {
        statement: "Quel élément représente une ligne de tableau ?",
        answers: ["&lt;td&gt;", "&lt;tr&gt;", "&lt;th&gt;", "&lt;row&gt;"],
        correctAnswer: "&lt;tr&gt;"
    },
    {
        statement: "Quelle balise insère une ligne horizontale ?",
        answers: ["&lt;line&gt;", "&lt;hr&gt;", "&lt;hl&gt;", "&lt;divider&gt;"],
        correctAnswer: "&lt;hr&gt;"
    },
    {
        statement: "Quel élément est de type block par défaut ?",
        answers: ["&lt;span&gt;", "&lt;div&gt;", "&lt;a&gt;", "&lt;em&gt;"],
        correctAnswer: "&lt;div&gt;"
    },
    {
        statement: "Quelle balise est utilisée pour du code informatique ?",
        answers: ["&lt;code&gt;", "&lt;pre&gt;", "&lt;console&gt;", "&lt;script&gt;"],
        correctAnswer: "&lt;code&gt;"
    },
    {
        statement: "Quel attribut lie un label à un input ?",
        answers: ["id", "class", "for", "name"],
        correctAnswer: "for"
    },
    {
        statement: "Quel caractère échappe les entités HTML ?",
        answers: ["!", "#", "&amp;", "*"],
        correctAnswer: "&amp;"
    },
    {
        statement: "Quelle balise charge un fichier CSS ?",
        answers: ["&lt;style&gt;", "&lt;css&gt;", "&lt;link&gt;", "&lt;script&gt;"],
        correctAnswer: "&lt;link&gt;"
    },
    {
        statement: "Quel élément crée un menu déroulant ?",
        answers: ["&lt;input&gt;", "&lt;select&gt;", "&lt;option&gt;", "&lt;dropdown&gt;"],
        correctAnswer: "&lt;select&gt;"
    },
    {
        statement: "Quelle est la balise d'une citation courte en ligne ?",
        answers: ["&lt;quote&gt;", "&lt;blockquote&gt;", "&lt;cite&gt;", "&lt;q&gt;"],
        correctAnswer: "&lt;q&gt;"
    },
    {
        statement: "Quel élément HTML5 est utilisé pour une navigation ?",
        answers: ["&lt;nav&gt;", "&lt;menu&gt;", "&lt;ul&gt;", "&lt;navigate&gt;"],
        correctAnswer: "&lt;nav&gt;"
    },
    {
        statement: "Quel élément est auto-fermant ?",
        answers: ["&lt;br&gt;", "&lt;div&gt;", "&lt;span&gt;", "&lt;p&gt;"],
        correctAnswer: "&lt;br&gt;"
    },
    {
        statement: "Quel attribut rend un champ obligatoire ?",
        answers: ["required", "mandatory", "validate", "necessary"],
        correctAnswer: "required"
    },
    {
        statement: "Quelle balise représente un pied de page ?",
        answers: ["&lt;footer&gt;", "&lt;bottom&gt;", "&lt;foot&gt;", "&lt;end&gt;"],
        correctAnswer: "&lt;footer&gt;"
    },
    {
        statement: "Quel élément stocke des métadonnées ?",
        answers: ["&lt;meta&gt;", "&lt;head&gt;", "&lt;data&gt;", "&lt;info&gt;"],
        correctAnswer: "&lt;meta&gt;"
    },
    {
        statement: "Quelle balise crée une liste de définition ?",
        answers: ["&lt;dl&gt;", "&lt;def&gt;", "&lt;dt&gt;", "&lt;list&gt;"],
        correctAnswer: "&lt;dl&gt;"
    },
    {
        statement: "Quel élément affiche une image vectorielle ?",
        answers: ["&lt;img&gt;", "&lt;svg&gt;", "&lt;canvas&gt;", "&lt;vector&gt;"],
        correctAnswer: "&lt;svg&gt;"
    },
    {
        statement: "Quel attribut image fournit un texte alternatif ?",
        answers: ["title", "alt", "description", "text"],
        correctAnswer: "alt"
    }
];

// Generate array of questions from the database
// V1 : clone the original base (minus 1st element), take a random element from the clone, delete it from the clone and push it to a new array (10 times).
//      Bad performance, need to change the index of all the remaining elements fro mthe clone after each delete !
// V2 : clone the original base (minus 1st element), shuffle the clone and extract the first (or last) 10 elements.
//      Simple and faster : shuffle & slice
//      numb : number of questions you need

const shuffleArr = (array,numb) => {
    let shuffledArray = array.slice(0, 1);
    let cloneArray = array.slice(1);
    // Shuffle : Fisher-Yates (Knuth)
    for (let i = cloneArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        //console.log("i : " + i);
        //console.log("j : " + j);
        [cloneArray[i], cloneArray[j]] = [cloneArray[j], cloneArray[i]];
        //console.log("clone : " + cloneArray);
    };
    shuffledArray = shuffledArray.concat(cloneArray.slice(0, numb));
    return shuffledArray
};

const questionSampleArray = shuffleArr(quizHtmlBasic, 10);
// Check console - To delete in final version
console.log(questionSampleArray);

// Declare score

let finalScore = 0;

// Declare colors

const rightAnswerColor = "rgba(161, 234, 31, 0.4)";
const wrongAnswerColor = "rgba(234, 172, 131, 0.4)";

// Declare elements

const quizTitle = document.querySelector("#quiz-title");
const questionNumber = document.querySelector("#question-number");
const questionStatement = document.querySelector("#question-statement");

const answerButtons = document.querySelectorAll(".answer-button");
const answerOne = document.querySelector(".answer1");
const answerTwo = document.querySelector(".answer2");
const answerThree = document.querySelector(".answer3");
const answerFour = document.querySelector(".answer4");

const nextButton = document.querySelector("#next-button");

const endButtons = document.querySelectorAll(".end-button");
//const tryAnotherButton = document.querySelector(".try-another-button");
//const retryButton = document.querySelector(".retry-button");

let rk = 0;

// Display Subject

quizTitle.innerHTML = questionSampleArray[0];

// Function !Disable element (switch to lock/unlock if doesn't work well) TODO?

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
// - Display right and wrong answers (green/red) - change colors TODO (update with nice colors)


answerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.border = "3px solid black";
        disableFunc("#next-button");
        disableFunc(".answer-button");
        // Update score
        if (btn.innerHTML === (questionSampleArray[rk]).correctAnswer) {
            finalScore++;
            console.log(`current score is : ${finalScore}`);
        }
        // Display right and wrong answers (green/red)
        /* Version 1 - Doesn't work if multiple correct answers
        switch ((questionSampleArray[rk]).correctAnswer) {
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
         */
        // Version 2 - 4 lines, clear and simple. Works with multiple answers
        answerOne.style.backgroundColor = (answerOne.innerHTML === (questionSampleArray[rk]).correctAnswer) ? rightAnswerColor : wrongAnswerColor ;
        answerTwo.style.backgroundColor = (answerTwo.innerHTML === (questionSampleArray[rk]).correctAnswer) ? rightAnswerColor : wrongAnswerColor ;
        answerThree.style.backgroundColor = (answerThree.innerHTML === (questionSampleArray[rk]).correctAnswer) ? rightAnswerColor : wrongAnswerColor ;
        answerFour.style.backgroundColor = (answerFour.innerHTML === (questionSampleArray[rk]).correctAnswer) ? rightAnswerColor : wrongAnswerColor ;
    });
});

// Filling new questions

const fillQuestion = rk => {
    // Question
    questionNumber.innerText = "Question " + rk;
    // Statement
    questionStatement.innerHTML = questionSampleArray[rk].statement;
    // Answers
    /* Version 1 (too much repeat - V2 simpler)
    if (((questionSampleArray[rk]).answers)[0]) {
        answerOne.innerHTML = ((questionSampleArray[rk]).answers)[0];
    } else {
        answerOne.innerHTML = "";
    };
    if (((questionSampleArray[rk]).answers)[1]) {
        answerTwo.innerHTML = ((questionSampleArray[rk]).answers)[1];
    } else {
        answerTwo.innerHTML = "";
    };
    if (((questionSampleArray[rk]).answers)[2]) {
        answerThree.innerHTML = ((questionSampleArray[rk]).answers)[2];
    } else {
        answerThree.innerHTML = "";
    };
    if (((questionSampleArray[rk]).answers)[3]) {
        answerFour.innerHTML = ((questionSampleArray[rk]).answers)[3];
    } else {
        answerFour.innerHTML = "";
    };
    */
    answerOne.innerHTML = (questionSampleArray[rk].answers[0]) || "";
    answerTwo.innerHTML = (questionSampleArray[rk].answers[1]) || "";
    answerThree.innerHTML = (questionSampleArray[rk].answers[2]) || "";
    answerFour.innerHTML = (questionSampleArray[rk].answers[3]) || "";
    // Use a loop for answers better/worse performance ?  TODO (optimisation)
};

// Click on next-button :
// - Increment question rank
// - Fill next question
// - Disable next-button
// - Unable answer-buttons
// - Reset initial style answer-buttons (initial colors & borders)
// - Only display non-empty answer-buttons
// - After last question : 
//          - display final score
//          - display message
//          - display 2 buttons (retry & go back to menu)


nextButton.addEventListener("click", () => {
    rk++;
    if (rk < questionSampleArray.length) { // If another question exists
        fillQuestion(rk);
        disableFunc("#next-button");
        disableFunc(".answer-button");
        // Reset initial style of answer-buttons
        answerButtons.forEach(btn => {
            btn.style.border = "1px solid var(--background-light-color)";
            btn.style.backgroundColor = "rgba(241, 234, 221, 0.4)";
            btn.innerHTML !== "" ? btn.style.display = "block" : btn.style.display = "none";
        });
    } else { // If it was the last question
        questionNumber.innerText = "";
        const scorePercent = Math.floor(100 * finalScore / rk);
        if (scorePercent === 100) {
            questionStatement.innerHTML = `Score final : ${scorePercent}% <br> Un.e vrai.e champion.ne, rien ne t'arrête !`;
        } else if (scorePercent >= 80) {
            questionStatement.innerHTML = `Score final : ${scorePercent}% <br> Presque parfait ! Encore un petit effort et ce sera du 100% !`;
        } else if (scorePercent >= 50) {
            questionStatement.innerHTML = `Score final : ${scorePercent}% <br> Pas mal ! Tu es à mi-chemin, continue comme ça, tu es sur la bonne voie !`;
        } else if (scorePercent >= 20) {
            questionStatement.innerHTML = `Score final : ${scorePercent}% <br> C’est en forgeant qu’on devient forgeron ! Ne lâche rien !`;
        } else {
            questionStatement.innerHTML = `Score final : ${scorePercent}% <br> Tous les champions ont commencé quelque part ! Ce n’est qu’un début, tu vas y arriver ! `;
        };
        answerButtons.forEach(btn => {
            btn.style.display = "none";
        });
        nextButton.style.display = "none";
        endButtons.forEach(btn => {
            btn.style.display = "flex";
        })
    }
});

// Try another quizz TODO
// Lancer un challenge au hasard ? Ou revenir au menu des thématiques ?