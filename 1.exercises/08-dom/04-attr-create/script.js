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
  let source = document.getElementById("source")
  let dataImage = source.getAttribute("data-image");
  let image = document.createElement('img');
  image.src = dataImage;
  document.getElementById("target").appendChild(image);
  source.parentNode.removeChild(source);



 /*  let tagOne = document.querySelector("#source")
  let tagImg = document.createElement('img')

  console.log(tagOne.getAttribute("data-image"))

  document.getElementById("target").appendChild(tagImg);

  document.querySelector('img').setAttribute("src", tagOne.getAttribute("data-image"));

  let father = document.getElementsByTagName("section")

  let Parent = Array.from(father);

  console.log(Parent[1])

  Parent[1].removeChild(Parent[1].firstElementChild); */




 //   window.onload = myFunction();
//    window.onload = myFunction2();
   
    

//    function myFunction2() {
//var x = document.querySelector("source").innerHTML = "owned";
//        console.log(x);
//}
    //test--------
   /*  
    var x = document.getElementById("source").getAttribute("data-image");
    console.log(x);
    
    
    
    var image = document.createElement("img"); // Create a <img> element
    image.innerText = x; 
    document.getElementById("target").appendChild(image); 
    
    
    
//    function myFunction() {
  var myobj = document.getElementById("source");
  myobj.remove(); */
//}
//    
    //----------------
    
    
    
//    document.body.appendChild(image);    
    
    
    
    
    
//    function myFunction() {
//  var x = document.getElementById("source")[0].getAttribute("data-image"); 
//        console.log(x);
//        
//  document.getElementById("demo").innerHTML = x;
//}
    
    
    
    // your code here
})();
