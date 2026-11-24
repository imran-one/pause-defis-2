function estimerBijou(poids, prixGramme) {
  const valeur = poids * prixGramme;
  return Math.round(valeur * 100) / 100;
}
console.log(estimerBijou(1.5, 650));
console.log(estimerBijou(2.5, 612.4));
console.log(estimerBijou(0.333, 600));

function validerPoids(valeur) {
  if (valeur === null || valeur === undefined || valeur === "")
    return "Le poids est obligatoire";
  if (isNaN(Number(valeur))) return "Le poids doit être un nombre";
  if (Number(valeur) <= 0) return "Le poids doit être positif";
  return "";
}
console.log(validerPoids(""));
console.log(validerPoids("abc"));
console.log(validerPoids(-3));
console.log(validerPoids(3.4));