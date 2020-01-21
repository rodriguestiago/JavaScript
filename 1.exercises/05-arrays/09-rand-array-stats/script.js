/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {




  document.getElementById("run").addEventListener("click", () =>{ 
    
    let numbers = []; 

    for (let i = 1; i <= 10; i++) {
        let number = Math.floor(Math.random() * 100)+ 1;
        document.getElementById("n-"+ i).textContent = number;
        numbers.push(number);
    }

    let somme = 0; 
    for(let i= 0; i<numbers.length; i++){
        somme = somme + numbers[i];
    }

    document.getElementById("min").textContent = Math.min(...numbers);
    document.getElementById("max").textContent = Math.max(...numbers);
    document.getElementById("sum").textContent = somme;
    document.getElementById("average").textContent = somme/numbers.length; 
});








/* 
    const numbers = [
        2,
        12,
        57,
        31,
        28,
        42,
        77,
        82,
        23,
        91,
        36,
        67,
    ];
    
    let rand = Math.random();
    let numbersLenght = numbers.length;
    let randIndex = Math.floor(rand * numbersLenght);
    let randomNumber = numbers[randIndex];
    
    document.getElementById("run").addEventListener("click", () => { */
//        document.getElementById("n-1").innerHTML = randomNumber;
//     
//       
//    numbers.forEach(function(person){
//        console.log(person)
//    });
    
        
        
        
        
        
        /* 
        var arr = [];
for (var i = 0; i < 10; i++)
{
  arr.push(Math.floor(Math.random() * 100) + 1)
}

var str = "";
for (var i = 0; i < 10; i++)
{
  str += "," + arr[i];
}

var div = document.getElementById("n-1");
div.innerText = str;
        
       
              
        Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};



        
        document.getElementById("min").innerHTML = (arr.min());
        document.getElementById("max").innerHTML = (arr.max());
     
        
        
    
    }); */
    
    
    
    // your code here
})();
