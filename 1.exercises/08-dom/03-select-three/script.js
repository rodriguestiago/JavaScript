/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    window.onload = myFunction();
    

//    function myFunction() {
//  document.querySelector(".target").innerHTML = "owned";
//}
//    
//    
//    var x = document.getElementsByClassName("target")[1].innerHTML = "owned";
//    console.log(x);
//    
//    
//    
//    var el = document.getElementsByClassName('target');
//for (var i=0;i<el.length; i++) {
//    el[i].click();
//}
//   
    
    
    
    
    
    function myFunction() {
  var x = document.querySelectorAll(".target");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML = "owner";
  }
}
    
    
    
    
    
    
    
//     function myFunction() {
//    
//   var test = document.querySelectorAll("p.target").innerHTML = "hi";
//         
//         test[0].innerHTML = "red"; 
//console.log(test);
//     }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    function myFunction() {
//    var matches = document.querySelectorAll("p.target");
//        matches.textContent = "owned";
//        
//        matches.textContent = "text";
//        
////        var test = matches.innerHTML
////    console.log(matches);
//(matches);
//        document.getElementById("demo").innerHTML = "Paragraph changed!";
//       
//        }
    
    
    // your code here
})();
