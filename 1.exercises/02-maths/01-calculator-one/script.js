/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

// addition function    
 function addition1() {
      var value1 = parseInt(document.getElementById("op-one").value);
      var value2 = parseInt(document.getElementById("op-two").value);
      var sumOfNumbers = value1 + value2;
      alert("La réponse est " + sumOfNumbers);
    }
// substraction1 function  
function substraction1() {
      var value1 = parseInt(document.getElementById("op-one").value);
      var value2 = parseInt(document.getElementById("op-two").value);
      var sumOfNumbers = value1 - value2;
      alert("La réponse est " + sumOfNumbers);
    }
//multiplication function
function multiplication1() {
      var value1 = parseInt(document.getElementById("op-one").value);
      var value2 = parseInt(document.getElementById("op-two").value);
      var sumOfNumbers = value1 * value2;
      alert("La réponse est " + sumOfNumbers);
    }   
//division function
function division1() {
      var value1 = parseInt(document.getElementById("op-one").value);
      var value2 = parseInt(document.getElementById("op-two").value);
      var sumOfNumbers = value1 / value2;
      alert("La réponse est " + sumOfNumbers);
    }
    
    
    
    
    document.getElementById("addition").addEventListener("click", () => {
        addition1();
        // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", () => {
        substraction1();
        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        multiplication1();
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", () => {
        division1();
        // perform an division
    });
})();
