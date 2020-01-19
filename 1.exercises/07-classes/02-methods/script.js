/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
      this.sayHello = "Hello";
  }
        sayHello() {
    return "this.sayHello" + this.firstname + this.lastname + "!";
  }
    }
    
    document.getElementById("run").addEventListener("click", () => {
        const John = new Person("John", "Tree");
        
        console.log(Person.sayHello);
        
        console.log(Person.call.sayHello + John.firstname + " " + John.lastname);
        mycar = new Person("Ford", "Tree");
        console.log(mycar.firstname + Person.sayHello);
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    class Person {
//  constructor(firstname, lastname) {
//    this.firstname = firstname;
//    this.lastname = lastname;
//  }
//        sayHello() {
//    return "Hello" + this.firstname + this.lastname + "!";
//  }
//        print(){
//            console.log("Hello" + sayHello() + this.firstname);
//            
//            
//        }
//}
//    
////person1 = new Person(John);
//    
//    
//    document.getElementById("run").addEventListener("click", () => {
//        const John = new Person("John", "Tree");
//        
////        console.log(sayHello John.firstname + " " + John.lastname);
//    console.log(print());
//    });
    // your code here
})();
