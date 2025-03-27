// button darkMode
const toggleButton = document.getElementById("darkMode");
const body = document.querySelector("body");

// Vérifier si le mode sombre est activé à chaque chargement de page
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "🌔";
}

// Ajouter un événement pour activer/désactiver le mode sombre
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Enregistrer l'état du mode sombre dans le localStorage
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "🌔";
    localStorage.setItem("darkMode", "enabled");
  } else {
    toggleButton.textContent = "🌒";
    localStorage.setItem("darkMode", "disabled");
  }
});
