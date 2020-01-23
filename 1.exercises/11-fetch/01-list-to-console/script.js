/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
     document.getElementById('run').addEventListener('click', getData);
    
    
 function getData(){
     
     
     fetch('http://localhost:3000/heroes').then((response) => {
//    console.log(response);
    response.json().then((data) => {
        console.log(data);
    });
});
  }
     
// 
//    fetch('http://localhost:3000/heroes')
//        .then((res) => { return res.json() })
//        .then((data) => {
//            let result = ``;
//            data.forEach((user) => {
//                const { id, name, alterEgo, abilities: { city, street } } = user
//                result =
//                    `
//    ID: ${id}               
//    Name : ${name}
//    AlterEgo : ${alterEgo} 
//                      `;
//                console.log(result);
//                    });
//                })

    // your code here
})();
