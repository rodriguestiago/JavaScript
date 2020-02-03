/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1 + texte2;
}
let afficherCar5 =  (texte) => {
    return texte.slice(4,5);
}
let afficher9Car =  (texte) => {
    return texte.slice(0,9);
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
//    console.log(texte);
//    texte.includes("Est ce une chaine de caractères ?");
    
    if (typeof texte == "string"){
        return true;
    }
}

let AfficherExtensionString =  (texte) => {
    return texte.split('.').pop();
}
let NombreEspaceString =  (texte) => {
    return texte.split(" ").length - 1;
}
let InverseString =  (texte) => {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
//    let value = Math.pow(2, 3);
//    return value;
    return Math.pow(2, 3);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    

    
}
let sufaceCercle =  (rayon) => {
    //5
//    let area = Math.PI * rayon * rayon;
//    console.log(area);
//    
//     let areaRounded = Math.ceil(area * 100) / 100;
//    console.log(areaRounded);
    
    console.log(Math.PI * rayon * rayon);
    console.log(Math.round(Math.PI * rayon * rayon * 100) / 100);
    
}
let hypothenuse =  (ab, ac) => {
    //5 et 8
    return Math.sqrt(ab*ab + ac*ac);
}
let calculIMC =  (poids, taille) => {
    let finalPoids = poids * .45;
    let finalTaille = taille * .025;
    console.log(finalPoids / Math.pow(finalTaille, 2));
    return finalPoids / Math.pow(finalTaille, 2);
}
