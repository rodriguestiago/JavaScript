/* becode/javascript
 *
 * /05-arrays/10-reduce-array/script.js - 5.10: utilisation d'un reducer
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = [
        {
            firstname: "Grenville",
            lastname: "Stive",
            age: 64,
        },
        {
            firstname: "Luis",
            lastname: "Jedrzejewsky",
            age: 73,
        },
        {
            firstname: "Teodor",
            lastname: "Warrington",
            age: 56,
        },
        {
            firstname: "Danya",
            lastname: "Bigby",
            age: 17,
        },
        {
            firstname: "Jemmy",
            lastname: "Goodbur",
            age: 87,
        },
        {
            firstname: "Vilhelmina",
            lastname: "Fost",
            age: 43,
        },
        {
            firstname: "Igor",
            lastname: "Putson",
            age: 45,
        },
        {
            firstname: "Klement",
            lastname: "Braybrook",
            age: 88,
        },
        {
            firstname: "Trefor",
            lastname: "Le Jean",
            age: 69,
        },
        {
            firstname: "Tarrah",
            lastname: "de Clerc",
            age: 77,
        },
        {
            firstname: "Brad",
            lastname: "Hookes",
            age: 82,
        },
        {
            firstname: "Kippar",
            lastname: "Fancet",
            age: 25,
        },
        {
            firstname: "Jecho",
            lastname: "Hawket",
            age: 87,
        },
        {
            firstname: "Lief",
            lastname: "Blazy",
            age: 80,
        },
        {
            firstname: "Jo-ann",
            lastname: "Sacase",
            age: 81,
        },
    ];

    
    
      document.getElementById("run").addEventListener("click", () => {


        const NewPeople = [];
        people.forEach(element => NewPeople.push(element.age));
        
        console.log(NewPeople.reduce(myFunc));
    
        function myFunc(total, num) {
          return total + num;
        } 
        
       

            /* console.log(people.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0));  */
            /* prends tableau people, donner la fonction .reduce 
             somme, avec la valeur current => fleche pour la fonction somme ou acculumator + valeur current "." age, init à 0 l'acuumulator))*/
       







//          function sumofArray(sum, num) { 
//            return sum + num; 
//        } 
//        function myGeeks(item) { 
//            alert(people.age.reduce(sumofArray));
//                
//        } 
          
          
       
    /* people.reduce(function(person){
        console.log(person)
    }); */
   
          
          
          
          
    
    });
    
    
    // your code here
})();
