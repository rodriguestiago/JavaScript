/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    
      document.getElementById("run").addEventListener("click", () => {
       
          console.log(Object.fromEntries(keys.map((_, i) => [keys[i], values[i]])));
          
          
          
          
          
          
//          let obj = Object.fromEntries(keys.entries()); 
//          let obj2 = Object.fromEntries(values.entries()); 
//          
//          console.log(obj + obj2);
          
          
          
          
//        const obj = Object.fromEntries(keys, values);
//          
//        console.log(obj);
//          
    });
    
})();
