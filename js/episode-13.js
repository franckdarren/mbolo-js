// Résultat de l'opération
const result = 15;

while (true) {
    let reponseUtilisateur = parseInt(
        prompt("Combien font 10+5 ?")
    );
    if (reponseUtilisateur === result) {
        alert("Bravo ! C'est la bonne réponse.");
        break;
    } else {
        alert("Non c'est incorrect, essayez encore !");
    }
}
