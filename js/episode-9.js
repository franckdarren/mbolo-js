// Demander la moyenne de l'utilisateur
let moyenne = parseFloat(prompt("Veuillez entrer votre moyenne"));

if (moyenne >= 10 && moyenne < 12) {
    // console.log("Mention Passable")
    alert("Mention Passable");
} else if (moyenne >= 12 && moyenne < 14) {
    // console.log("Mention Assez Bien")
    alert("Mention Assez Bien");
} else if (moyenne >= 14 && moyenne < 16) {
    // console.log("Mention Bien")
    alert("Mention Mention Bien");
} else if (moyenne >= 16 && moyenne < 18) {
    // console.log("Mention Très Bien")
    alert("Mention Très Bien");
} else if (moyenne >= 18 && moyenne <= 20) {
    // console.log("Mention Excellent")
    alert("Mention Excellent");
} else {
    // console.log("Travail Insuffisant")
    alert("Travail Insuffisant");
}
