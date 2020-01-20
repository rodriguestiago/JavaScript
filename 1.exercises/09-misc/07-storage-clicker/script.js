/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("increment").addEventListener("click", clickCounter);
    window.onload=getLocalStorage();
    
    function clickCounter() {
  if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("target").innerHTML = "Vous avez appuyé sur le bouton " + localStorage.clickcount + " foi(s).";
  } else {
    document.getElementById("target").innerHTML = "Desole, votre browser n'est pas compatible avec le web storage...";
  }
}
    
    var x = localStorage.getItem('clickcount');
    
    
    function getLocalStorage(){
    document.addEventListener('click', () => {
      console.log(localStorage.getItem('clickcount'))
     
    })
  }
    
    
    // your code here
})();
