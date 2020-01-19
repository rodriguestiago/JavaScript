/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    
    
    
    
    
var months = ['janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'];

var weekday = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];

var date=new Date();

    document.getElementById("target").innerHTML = (getDate(date))


function getDate(date){
   return [
     weekday[date.getDay()],
     date.getDate(),
     months[date.getMonth()],
     date.getFullYear()
   ].join(' ') + ", " + date.getHours() + "h" + date.getMinutes();
}
    
    
    
    
    
    
    
//    
//    window.onload = getDate();


    
    
})();
