/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
//    var url = 'http://localhost:3000/heroes';
//    
//     document.getElementById("run").addEventListener("click", () => {
//         
//         
//         
//         
//         
//          let id = document.getElementById('hero-id').value;
   
//    const person = {
//        name: nom ,
//        alterEgo: alterEgo,
//        pouvoirs: pouvoirs  
//    };
         
         
         
         
         
         
         
         
//fetch('http://localhost:3000/heroes',{
//    
//    method:'delete',
//    body: JSON.stringify(person),
//    headers:{
//        'Content-Type': 'application/json'
//    
//}
//    
//    }).then(function(response){
//          return response.text();
//    }).then(function(text){
//    console.log(text);
//    
//         
//         
//});
         
         
         
         
         
        
    
//    function deleteData(item, url) {
//  return fetch(url + '/' + item, {
//    method: 'delete'
//  }).then(response =>
//    response.json().then(json => {
//      return json;
//    })
//  );
//}
//         
//         
//     });
    
    
    
    
    
    
    
    var id = document.getElementById('hero-id').value;
    
    
    document.getElementById("run").addEventListener("click", () => {
    
      var id = document.getElementById('hero-id').value;
    
    
    fetch('http://localhost:3000/heroes/' + id, {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res => console.log(res))
    
    
    });
    
    
    

    // your code here
})();
