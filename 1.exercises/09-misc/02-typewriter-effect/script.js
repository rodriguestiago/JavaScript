/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    
    window.onload = type();

   
    
    document.getElementById("target").style.display = "none";
function type(i, t, ie, oe) {

    input = document.getElementById(ie).innerHTML;
    document.getElementById(oe).innerHTML += input.charAt(i);
    setTimeout(function(){
        ((i < input.length - 1) ? type(i+1, t, ie, oe) : false);
    }, t);
}

type(0, 100, "target", ".material");
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    var i = 0;
    
    
    
//   var txt =  document.getElementById("target").innerHTML = 'Je suis un texte qui va apparaître dans un effet "machine à écrire", un peu comme dans les films noirs. Sauf que... je ne sais pas qui est l\'assassin ! Y en a-t-il vraiment un ? Habite-t-il au 21 ? Que de mystères !';
    
    
    
    
// var txt2 =   document.getElementById("target") = 'Je suis un texte qui va apparaître dans un effet "machine à écrire", un peu comme dans les films noirs. Sauf que... je ne sais pas qui est l\'assassin ! Y en a-t-il vraiment un ? Habite-t-il au 21 ? Que de mystères !';
    
//     var txt =   document.getElementById("target");
//    
//    var modifText = txt.innerHTML = 'helo';
//    
////var txt = 'Je suis un texte qui va apparaître dans un effet "machine à écrire", un peu comme dans les films noirs. Sauf que... je ne sais pas qui est l\'assassin ! Y en a-t-il vraiment un ? Habite-t-il au 21 ? Que de mystères !'; 
//    
//    
//var speed = 50; /* The speed/duration of the effect in milliseconds */
//
//function typeWriter() {
//  if (i < txt.length) {
//    document.getElementById("target").innerHTML += txt.charAt(i);
//    i++;
//    setTimeout(typeWriter, speed);
//  }
//}
    

    
    
    // your code here
})();
