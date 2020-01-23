/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
//    function load_getUserListByGroupID(element) {
//        alert(element.${id}.value);
//    }
//    load_getUserListByGroupID();
    
    
    
    
//     document.getElementById("run").addEventListener("click", () => {
//         
//         let input = document.getElementById('hero-id').value;
//         console.log(input);
//
//         
//         
//         
//         
//         
//         
//         
//          console.log(heroes.has("Alexandre"));
//     });
    
    
    
    
    
    
    
    
    
    
    
     var id = document.getElementById('hero-id').value;
    
    document.getElementById("run").addEventListener("click", () => {
    
      var id = document.getElementById('hero-id').value;
    
    
    fetch('http://localhost:3000/heroes/' + id, {
  method: 'GET',
})
.then(res => res.text()) // or res.json()
.then(res => console.log(res))

        result =
                    `<div>
                     <h5> ID: ${id} </h5>
                         <ul class="w3-ul">
                            <li> Name : ${name}</li>
                         </ul>
                      </div>`;
                        document.getElementById('target').innerHTML = result;
    
    
    });
    
    
    // your code here
})();
