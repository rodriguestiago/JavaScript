/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
//    document.getElementById("part-one").addEventListener("click", buttonClick());
//    
//var i = 461;
//    function buttonClick() {
//        i++;
//        document.getElementById('part-one').value = i;
//    }
    
    
    
//--------------first number-------------//
    var x = 461;
    var y = '';
    var n = '';
    var b = n;

    
    
var span = document.getElementById('target');
var increment = document.getElementById('part-one'); 


    
increment.addEventListener('click', function () {

//  span.textContent = "+" + x++ + y;
    span.textContent = "+" + x++;
    
    
    var n = x.toString();
    console.log(n);
    span.textContent = n + y;
    
    
});
    
    //------------------------------------------------

var y = 01;
    var w = '';
    
    
var span = document.getElementById('target');
var increment2 = document.getElementById('part-two'); 


increment2.addEventListener('click', function () {

//  span.textContent = "+" + x++ + y;
    span.textContent = y++ ;
    
    
    var w = y.toString();
    console.log(b + w);
    span.textContent = w + 110 + b + n;
    
    
});
    
    
    
    
    
    
    
    
    
    
//--------------second number-------------//    
//var y = 01;
//// var span = document.querySelector('part-one');
//var span = document.getElementById('target');// find the <span> element in the DOM
//var increment2 = document.getElementById('part-two'); // find the element with the ID 'increment'
//
//
//increment2.addEventListener('click', function () {
//  // this function is executed whenever the user clicks the increment button
//  span.textContent = y++;
//});
//    
//    
//    
//    var t = y.toString();
//    console.log(t);

    
    
    
    
//    
//    var n = x.toString();
//    console.log(x);
    
    
    
    
    
    
    
//    document.getElementById("part-three").addEventListener("click", test());
//    function test(){
//    var res = x.concat(y);
//    console.log(res);
//    }
    
    
    
    
    
    
    
    
//    var numberSplit = document.getElementById('target');
//    
//    var str = '123',
//    array = str.split('');
//
//(function(a, b, c) {
//    a; // 1
//    b; // 2
//    c; // 3
//}).apply(null, array)
//
//array[0] = "Georgie";
//console.log(array[0]);
    
    
    
    
    
    
    
    
//    var i = 461;
//    
//    function buttonClick() {
//        i++;
//        document.getElementById('part-one') = i;
//}
//  
//document.getElementById("part-one").addEventListener("click", () => {
//    buttonClick();
//});
    
    
    
    
    // your code here
})();
