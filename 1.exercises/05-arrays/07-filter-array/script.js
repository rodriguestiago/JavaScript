/* becode/javascript
 *
 * /05-arrays/07-filter-array/script.js - 5.7: filtrer un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = [
        {
            firstname: "Dreddy",
            lastname: "Nussgen",
            age: 70,
        },
        {
            firstname: "Yves",
            lastname: "Sear",
            age: 49,
        },
        {
            firstname: "Marcel",
            lastname: "Cowderay",
            age: 59,
        },
        {
            firstname: "Dag",
            lastname: "Binnall",
            age: 31,
        },
        {
            firstname: "Horten",
            lastname: "Claesens",
            age: 75,
        },
        {
            firstname: "Charmian",
            lastname: "Harnes",
            age: 10,
        },
        {
            firstname: "Sean",
            lastname: "Littlejohns",
            age: 37,
        },
        {
            firstname: "Hazlett",
            lastname: "Sprouls",
            age: 87,
        },
        {
            firstname: "Marcel",
            lastname: "Hasted",
            age: 66,
        },
        {
            firstname: "Cary",
            lastname: "Summerson",
            age: 15,
        },
        {
            firstname: "Feodor",
            lastname: "Ollett",
            age: 56,
        },
        {
            firstname: "Kelly",
            lastname: "Ranahan",
            age: 62,
        },
        {
            firstname: "Madelene",
            lastname: "Davie",
            age: 14,
        },
        {
            firstname: "Bent",
            lastname: "Karpe",
            age: 82,
        },
        {
            firstname: "Reinaldo",
            lastname: "Grimbleby",
            age: 81,
        },
    ];

    
    let majeurArray = [];
      document.getElementById("run").addEventListener("click", () => {
        

        people.forEach(element => {
            if(element.age>18) {
                majeurArray.push(element);
            }

        
        });
    console.log(majeurArray);


   



          
          
   /*        var arrayLength = people.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(people[i]);
    
}
          if(people.age < 18){
              
              
              
          }
          
          
          people.forEach(function(person){
        console.log(person.firstname)
    }); */
          
          
          
          
          
          
//          
//          var rebels = people.filter(function (pilot) {
//  return pilot.age ===  18 ;
//});
//
//          console.log(rebels); 
//          
          
          
          
          
          
          
//          const myarray = people.map(person => person.age > 18);
//          console.log(myarray);
   
    });
    
    // your code here
})();
