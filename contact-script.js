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

/*sendButton.addEventListener("click", () => {
    if (nameInput.value.trim() === "")
        alert("Merci d'indiquer votre nom")
    else if (mailInput.value.trim() == "")
        alert("Merci de renseigner votre mail")
    else if (!isValidEmail(mailInput.value.trim()))
        alert("Merci d'indiquer une adresse mail valide")
    else if (messageInput.value.trim() === "")
        alert("Veuillez préciser votre demande")
    else {
        alert("Votre message a bien été envoyé")
    }

})*/


/* Affiche le message d'alerte dans <output></output> */

sendButton.addEventListener("click", () => {
    if (nameInput.value.trim() === "")
        document.getElementById("outputMessage").textContent = "Merci d'indiquer votre nom";
    else if (mailInput.value.trim() == "")
        document.getElementById("outputMessage").textContent = "Merci de renseigner une adresse mail"
    else if (!isValidEmail(mailInput.value.trim()))
        document.getElementById("outputMessage").textContent = "Merci d'indiquer une adresse mail valide"
    else if (messageInput.value.trim() === "")
        document.getElementById("outputMessage").textContent = "Veuillez préciser votre demande"
    else {
        document.getElementById("outputMessage").textContent = "Votre message a bien été envoyé !"
        document.getElementById("myform").reset();
    }
})

