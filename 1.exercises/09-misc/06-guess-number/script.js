/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    window.onload=myFunction();
    
      
    function myFunction(){
        var guess = 1;
    var y = Math.floor(Math.random() * 10 + 1);
      
   var x = prompt("Trouvez le nombre");
  console.log(x);
   if(x == y) 
   {     
       alert("Bravo!!! Vous l'avez trouve en "
               + guess + " tentatives "); 
   } 
           
        
//    else if(x > y) 
//                   
//   {     
//       guess++; 
//       alert("OOPS Desole!! Essayez un nombre plus petit"); 
//       
      else if(x > y){ 
       
//       do {
           guess++;   
        var x = prompt("Essayez un nombre plus petit");
        if(x == y) 
   {     
       alert("Bravo!!! Vous l'avez trouve en "
               + guess + " tentatives "); 
   } 
        }
        
       //while (x > y);
       else{
      // do {
           guess++; 
        var x = prompt("Essayez un nombre plus grand");
           if(x == y) 
   {     
       alert("Bravo!!! Vous l'avez trouve en "
               + guess + " tentatives "); 
   } 
        }
    //   while (x < y);
     // }
      
   } 
//        
//        
//   else
//   { 
//       guess++; 
//       alert("OOPS Desole!! Essayez un nombre plus grand") 
//   } 
//}  
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
//   else if(x > y) 
//                   
//   {     
//       guess++; 
//       alert("OOPS Desole!! Essayez un nombre plus petit"); 
//       var x = prompt("Please enter a number");
//   } 
//   else
//   { 
//       guess++; 
//       alert("OOPS Desole!! Essayez un nombre plus grand") 
//   } 
//} 
    
    
    
    
    
    // your code here
})();
