// Demander le montant de la facture
let montant = parseInt(prompt("Veuillez rentrer le montant de la facture"));
let remise = montant*10/100;

if (montant>40000) {
    // console.log("Total à payer: " + (montant-remise) + " F")
    alert("Total à payer: " + (montant-remise) + " F");
} else {
    // console.log("Total à payer: " + montant + " F")
    alert("Total à payer: " + montant + " F");
}