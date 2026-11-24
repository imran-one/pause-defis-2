const prix = [120, 85, 300, 45, 210];
let totale=0;
let prixMax = 0;
let compteur=0;
for (let i = 0; i < prix.length; i++) {
    totale += prix[i];
    if(prixMax < prix[i]){prixMax = prix[i]};
    if(prix[i]>100){compteur++};
}
console.log(totale);
console.log(prixMax);
console.log(compteur);