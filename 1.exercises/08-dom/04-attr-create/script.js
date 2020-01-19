/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
 //   window.onload = myFunction();
//    window.onload = myFunction2();
   
    

//    function myFunction2() {
//var x = document.querySelector("source").innerHTML = "owned";
//        console.log(x);
//}
    
    
    var x = document.getElementById("source").getAttribute("data-image");
    console.log(x);
    
    
    
    var image = document.createElement("img"); // Create a <img> element
    image.innerText = x; 
    document.getElementById("target").appendChild(image); 
    
    
    
//    function myFunction() {
  var myobj = document.getElementById("source");
  myobj.remove();
//}
//    
    
    
    
    
//    document.body.appendChild(image);    
    
    
    
    
    
//    function myFunction() {
//  var x = document.getElementById("source")[0].getAttribute("data-image"); 
//        console.log(x);
//        
//  document.getElementById("demo").innerHTML = x;
//}
    
    
    
    // your code here
})();
