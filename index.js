//quiz ouverts niveau 1
const htmlOne = document.querySelector("#html-n1");
htmlOne.addEventListener("click", () => {
  localStorage.setItem("chosenTheme", "htmlBasics");
  // document.location.href = "./quiz.html";
});

const cssOne = document.querySelector("#css-n1");
cssOne.addEventListener("click", () => {
  localStorage.setItem("chosenTheme", "cssBasics");
  // document.location.href = "./quiz.html";
});

const javascriptOne = document.querySelector("#javascript-n1");
javascriptOne.addEventListener("click", () => {
  localStorage.setItem("chosenTheme", "jsBasics");
  // document.location.href = "./quiz.html";
});

const gitOne = document.querySelector("#git-n1");
gitOne.addEventListener("click", () => {
  localStorage.setItem("chosenTheme", "gitBasics");
  // document.location.href = "./quiz.html";
});

//quiz ouverts niveau 2

const htmlTwo = document.querySelector("#html-n2");
htmlTwo.addEventListener("click", () => {
  localStorage.setItem("chosenTheme", "htmlIntermediate");
  // document.location.href = "./quiz.html";
});

const cssTwo = document.querySelector("#css-n2");
cssTwo.addEventListener("click", () => {
  localStorage.setItem("chosenTheme", "cssIntermediate");
  // document.location.href = "./quiz.html";
});

const javascriptTwo = document.querySelector("#javascript-n2");
javascriptTwo.addEventListener("click", () => {
  localStorage.setItem("chosenTheme", "jsIntermediate");
  // document.location.href = "./quiz.html";
});

const gitTwo = document.querySelector("#git-n2");
gitTwo.addEventListener("click", () => {
  localStorage.setItem("chosenTheme", "gitIntermediate");
  // document.location.href = "./quiz.html";
});

//quiz fermés
const typescriptOne = document.querySelector("#typescript-n1");
const pythonOne = document.querySelector("#python-n1");
const phpOne = document.querySelector("#php-n1");
const figmaOne = document.querySelector("#figma-n1");
const vscodeOne = document.querySelector("#vscode-n1");
const typescriptTwo = document.querySelector("#typescript-n2");
const pythonTwo = document.querySelector("#python-n2");
const phpTwo = document.querySelector("#php-n2");
const figmaTwo = document.querySelector("#figma-n2");
const vscodeTwo = document.querySelector("#vscode-n2");
