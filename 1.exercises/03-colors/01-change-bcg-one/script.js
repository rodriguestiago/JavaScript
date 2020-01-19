/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
//----------RED FUNCTION-----------
function redbg() {
    document.body.style.backgroundColor = "red";
}
  
document.getElementById("red").addEventListener("click", () => {
    redbg();
});
//----------GREEN FUNCTION-----------   
function greenbg() {
    document.body.style.backgroundColor = "green";
}
  
document.getElementById("green").addEventListener("click", () => {
    greenbg();
});    
//----------YELLOW FUNCTION-----------       
function yellowbg() {
    document.body.style.backgroundColor = "yellow";
}
  
document.getElementById("yellow").addEventListener("click", () => {
    yellowbg();
});  
//----------BLUE FUNCTION-----------       
function bluebg() {
    document.body.style.backgroundColor = "blue";
}
  
document.getElementById("blue").addEventListener("click", () => {
    bluebg();
});  
    
   
})();
