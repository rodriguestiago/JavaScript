/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
       document.getElementById("run").addEventListener("click", () => {
    getFridays();
});
    

    
    
    
    function getFridays(jahr){
    var d = new Date();
    var counter = 0;
    var month;

    for(month=0;month<12;month++)
    {
     d.setFullYear(jahr, month,13);
        if (d.getDay() == 5)
        {
          counter++;
        }
    }

    return counter;
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    function getFridays(day) {
//        let annee = (document.getElementById("year").value);
//    
//    var count = 0;
//    for (var month=0; month<12; month++) {
//        var d = new Date(day,month,13);
//        if(d.getDay() == 5){
//          count++;
//       }
//    }
//    return count;  
//       console.log(getFridays(annee));
//}
//
//console.log(getFridays(annee));
    
    
//    console.log(annee);
    
    
//    function getFridays(year,month){ 
//    var fridays=new Array();
//    var i=0;
//        var tdays=new Date(year, month, 0).getDate();
//        for(date=0;date<=tdays;date++)     {
//            sdate=(date<10)?"0"+date:date; 
//            dd=(month+1)+"/"+sdate+"/"+year;  
//            var day=new Date(year,month,date); 
//            if(day.getDay() == 5 )  
//            {  
//                fridays[i++]=dd;
//            }    
//        }   
//        return fridays; 
//    } 
})();
