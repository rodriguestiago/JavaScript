/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
   

//    window.onload = myFunction();
    document.querySelector("img").addEventListener("mouseover", myFunction);
//    document.getElementById("demo").addEventListener("mouseout", myFunction2);
    
     function myFunction() {
         
          
         
         
         
         
    
      var y = document.querySelector('img').getAttribute('data-hover');
         
        var x = document.querySelector('img').setAttribute('src', y);
         
//    var x = document.getElementsByTagName("img").getAttribute("data-hover");
//    console.log(x);
    
     }
    
    
    
   
    
    
    
    
    
    
    
    
//    var image = document.createElement("img"); // Create a <img> element
//    image.innerText = x; 
//    document.getElementById("target").appendChild(image); 
//    
//    
//    
//
//  var myobj = document.getElementById("source");
//  myobj.remove();
    
    // your code here
})();
