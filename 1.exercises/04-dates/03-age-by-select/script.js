/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    
    document.getElementById("run").addEventListener("click", () => {
    calcAge();
});
    
    
    
    function calcAge(day, month, year) {
        //--------current date-------
//    var currentdate = new Date(); 
//        var datetime = currentdate.getDate() + "-"
//                + (currentdate.getMonth()+1)  + "-" 
//                + currentdate.getFullYear() + " "  
//                alert(datetime);
        
        
        //--------current date-------
        var currentdate = new Date(); 
        var dateDay = currentdate.getDate();
        var dateMonth = currentdate.getMonth();
        var dateYear = currentdate.getFullYear();    
        
        
        
    
        //--------form date-------
        var jour = (document.getElementById("dob-day").value);
        var mois = (document.getElementById("dob-month").value);
        var annee = (document.getElementById("dob-year").value);
       
//        var formAge = jour + "-" + mois + "-"  + annee;
        
        
        var totalAge = dateYear - annee;
        alert("Vous avez" + " " + totalAge + " " + "ans");
        alert("Vous etes né le " + jour + "-" + mois + "-" + annee)
        
         
        
//        
//    const now = new Date();
//    let age = now.getFullYear() - year;
//    const mdif = now.getMonth() - month + 1; // jan is 0 in getMonth
//    if (mdif < 0) {
//        // not birthday yet
//        --age;
//    }
//    else if (mdif === 0) {
//        // maybe birthday?
//        var ddif = now.getDate() - day;
//        if (ddif < 0) --age; // not birthday yet
//    }
//    return age;
//        console.log(age);
}
})();
