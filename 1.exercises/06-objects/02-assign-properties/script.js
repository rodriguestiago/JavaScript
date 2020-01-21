/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    
    
    document.getElementById("run").addEventListener("click", () => {
        computers.forEach(computer => {

            if (!computer.hasOwnProperty("available"))
                computer.available = defaultProps.available;
            if (!computer.hasOwnProperty("user"))
                computer.user = defaultProps.user;
            if (!computer.hasOwnProperty("os"))
                computer.os = defaultProps.os;

        });
        console.log(computers);
          
          
          
          
//          const tableau = Object.assign(computers, defaultProps);
//          
//          console.log(tableau);
          
          
          
//          computers.push(...defaultProps);
//
//console.log(computers); 
          
          
          
          
//          const combined2 = [...computers, ...defaultProps];
//          console.log(combined2);
          
          
          
//   const combined1 = [].concat(computers, defaultProps);
//          console.log(combined1);
          
          
          
//          let Sites = { ...computers, ...defaultProps }; 
//  
//console.log(Sites) ;
          
          
          
          
          
          
 
//       var children = computers.concat(defaultProps);
//          console.log(children);
          
          
          
          
//          function pushFunction() { 
//            computers.push(defaultProps); 
//              console.log(pushFunction);
//        } 
        
          
          
//    var newData = [...computers, defaultProps] 
//console.log(newData);
    
       });
    
    
    // your code here
})();
