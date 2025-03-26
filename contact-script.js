const sendButton = document.querySelector("#sendButton");
const nameInput = document.querySelector("#name");
const mailInput = document.querySelector("#mail");
const messageInput = document.querySelector("#message")

/* Vérifie si le format mail est valide */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* Affiche un message si la valeur est vide
/ .trim enlève les espaces devant et derrière 
pour éviter de ne rentrer que des espaces*/
sendButton.addEventListener("click", () => {
    if (nameInput.value.trim() === "")
        alert("Merci d'indiquer votre nom")
    else if (mailInput.value.trim() == "")
        alert("Merci de renseigner votre mail")
    else if (!isValidEmail(mailInput.value.trim()))
        alert("Merci d'indiquer une adresse mail valide")
    else if (messageInput.value.trim() === "")
        alert("Veuillez préciser votre demande")
    else { alert("Votre message a bien été envoyé") }
})
