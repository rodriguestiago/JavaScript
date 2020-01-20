/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    do{
        age = prompt("Quelle est votre age?");
        sexe = prompt("Quelle est votre sexe?");
        ville = prompt("Ou habitez vous?");
        confirmation = confirm("Est ce correct?" + "\n " + age + "\n " + sexe + "\n " + ville);
        }while (confirmation == false);




    /* let age = prompt("Quelle est votre age?");
    let sexe = prompt("Quelle est votre sexe?");
    let ville = prompt("Ou habitez vous?");  
    let box =  confirm("Est ce correct?" + "\n " + age + "\n " + sexe + "\n " + ville);
    
while(box!=true){
	let age = prompt("Quelle est votre age?");
    let sexe = prompt("Quelle est votre sexe?");
    let ville = prompt("Ou habitez vous?");
	let box =  confirm("Est ce correct?" + "\n " + age + "\n " + sexe + "\n " + ville);
}
alert("Très bien!") */

})();
