/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const ol = document.getElementById('target');
    const url = 'http://localhost:3000/heroes';
    
    document.getElementById('run').addEventListener('click', getData);
    
    
//   function getData(){
//     
//     
//     fetch('http://localhost:3000/heroes').then((response) => {
//
//    response.json().then((data) => {
//        
//        document.getElementById('target').innerHTML = data;
//        
//       
//    });
//});
//  }

    
    
    
    
    
    
    
    
    
         function getData(){
     
     fetch('http://localhost:3000/heroes')
        .then((res) => { return res.json() })
        .then((data) => {
            let result = ``;
            data.forEach((user) => {
                const { id, name, alterEgo, abilities } = user
                result +=
                    `<div>
                     <h5> ID: ${id} </h5>
                         <ul class="w3-ul">
                             <li> Name : ${name}</li>
                             <li> alterEgo : ${alterEgo} </li>
                             <li> abilities : ${abilities}</li>
                         </ul>
                      </div>`;
                        document.getElementById('target').innerHTML = result;
                    });
                })
   
};
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    
//     function getData(){
//     
//     fetch('http://localhost:3000/heroes')
//        .then((res) => { return res.json() })
//        .then((data) => {
//            let result = `<h2> Random User Info From Jsonplaceholder API</h2>`;
//            data.forEach((user) => {
//                const { id, name, email, address: { city, street } } = user
//                result +=
//                    `<div>
//                     <h5> User ID: ${id} </h5>
//                         <ul class="w3-ul">
//                             <li> User Full Name : ${name}</li>
//                             <li> User Email : ${email} </li>
//                             <li> User Address : ${city}, ${street} </li>
//                         </ul>
//                      </div>`;
//                        document.getElementById('result').innerHTML = result;
//                    });
//                })
//   
//};

    
    // your code here
})();
