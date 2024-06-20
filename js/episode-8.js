// Demander le nom de l'utilisateur
let nom = prompt("Quel est votre nom ?");

// Demander le sexe de l'utilisateur
let sexe = prompt("Quel est votre sexe");

if (sexe === "Masculin" || sexe === "masculin" || sexe === "MASCULIN") {
    // console.log("Bonjour monsieur " + nom)
    alert("Bonjour monsieur " + nom);
} else if (sexe === "Féminin" || sexe === "féminin" || sexe === "FEMININ") {
    // console.log("Bonjour madame " + nom)
    "Bonjour madame " + nom;
} else {
    // console.log("Veuillez  recommencer.")
    alert("Veuillez recommencer.");
}
