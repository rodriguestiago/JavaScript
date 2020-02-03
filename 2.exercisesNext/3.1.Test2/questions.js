let CreationTableauLangages =  () => {
    let langages = ["Html", "CSS", "Java", "PHP"];
    return langages;
}

let CreationTableauNombres =  () => {
    let nombres = [0, 1, 2, 3, 4, 5];
    return nombres;
}

let RemplacementElement =  (langages) => {
    langages[2] = "Javascript";
    return langages;
    
  //  return langages.replace(/Java/i, 'Javascript');
    
    //console.log(langages[1]);
}

let AjoutElementLangages =  (langages) => {
    langages.push("Ruby");
    langages.push("Python");
    return langages;
}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2);
    nombres.unshift(-1);
    nombres.sort((a, b) => a - b);
    return nombres;
   
}

let SuppressionPremierElement =  (langages) => {
    langages.shift();
    return langages;
}

let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    let reseaux_sociaux = reseaux_sociaux_chaine.split(',');
    return reseaux_sociaux;
    
    
//    console.log(reseaux_sociaux);
    
    
  //  let reseaux_sociaux = reseaux_sociaux_chaine.split(" ");
    //return reseaux_sociaux;
    
    //console.log(reseaux_sociaux);
    
    //let reseaux_sociaux = reseaux_sociaux_chaine.split(', '); 
   // return reseaux_sociaux;
   // console.log(reseaux_sociaux);
}

let ConversionTableauChaine =  (langages) => {
    let langages_chaine = langages.toString();
    return langages_chaine;
}

let TriTableau =  (reseaux_sociaux) => {
    reseaux_sociaux.sort();
    return reseaux_sociaux;
}

let InversionTableau =  (reseaux_sociaux) =>{
    reseaux_sociaux.reverse();
    return reseaux_sociaux;
}
