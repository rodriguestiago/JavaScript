/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    
    
    
    
    
    
    
    
    
     let nom = document.getElementById('hero-name').value;
    let alterEgo = document.getElementById('hero-alter-ego').value;
    let pouvoirs = document.getElementById('hero-powers').value;
    
    
    
      var x = document.getElementById('hero-name').value;
            function validateForm() {
 
  if (nom == "") {
//    alert("Vous devez remplir le nom");
    return false;
    
  }
    var alterEgo = document.getElementById('hero-alter-ego').value;
  if (alterEgo == "") {
//    alert("Vous devez remplir l'alterEgo");
    return false;
  }
    var pouvoirs = document.getElementById('hero-powers').value;
  if (pouvoirs == "") {
//    alert("Vous devez remplir les pouvoirs");
     return false;
      
      
      if(x = false)
  { 
    alert("validation failed false");
    return false;
  }

  alert("validations passed");
  return true;
      
      
  }
}
    
    
    
    
    
    
    
    
    
    document.getElementById("run").addEventListener("click", () => {
    
        validateForm();
        
        
        

        
        
        
        
        
        
        
        
        
        
    let nom = document.getElementById('hero-name').value;
    let alterEgo = document.getElementById('hero-alter-ego').value;
    let pouvoirs = document.getElementById('hero-powers').value;
        
    const person = {
        name: nom ,
        alterEgo: alterEgo,
        pouvoirs: pouvoirs  
    };
fetch('http://localhost:3000/heroes',{
    
    method:'post',
    body: JSON.stringify(person),
    headers:{
        'Content-Type': 'application/json'
    
}
    
    }).then(function(response){
          return response.text();
    }).then(function(text){
    console.log(text);
    
//}).catch(function(error){
//        console.error(error);
//        
//         })
    });
    
    });
    
    //    var payload = {
//    a: 1,
//    b: 2
//};
//
//var data = new FormData();
//data.append( "json", JSON.stringify( payload ) );
//
//fetch("http://localhost:3000/heroes",
//{
//    method: "POST",
//    body: data
//})
//.then(function(res){ return res.json(); })
//.then(function(data){ alert( JSON.stringify( payload ) ) })
//console.log(payload);
    
    
    
    
    
    
    
    
    
    
    
    
//    var search = document.getElementById('hero-name').value;
//    var payload = {
//    name: search,
//    b: 2
//};
//console.log(search);
//    
//    
//
//var data = new FormData();
//data.append( "json", JSON.stringify( payload ) );
//
//fetch("http://localhost:3000/heroes",
//{
//    method: "POST",
//    body: data
//})
//.then(function(res){ return res.json(); })
//.then(function(data){ alert( JSON.stringify( data ) ) })
//    
//   document.getElementById("run").addEventListener("click", () => {
//console.log(payload);
//    
//    
//});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    let nom = document.getElementById('hero-name').value;
//    
//  fetch("http://localhost:3000/heroes", {
//  method: "post",
//  headers: {
//    'Accept': 'application/json',
//    'Content-Type': 'application/json'
//  },
//
//  body: JSON.stringify({
//    name: nom
//   
//  })
//})
//.then( (response) => { 
//   console.log(nom);
//});
    
    
    
    
    
    
    
//    
//    
//    
//    document.getElementById("run").addEventListener("click", function (e)  {
//    
//        e.preventDefault();
//    
//        
//        const formData = new FormData();
//        
//        
//        fetch('http://localhost:3000/heroes', {
//            method: 'post'  
//        })
//            .then(function(response){
//            return response.text();
//            })
//            .then(function(text){
//            console.log(text);
//            }
//                )
//           
//        
//        
//    });
    // your code here
})();
