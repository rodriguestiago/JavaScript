/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    



    function getPost(error, article) {
        if(error) {
              console.log(error);
        }else {
              article.forEach(element => {
                    console.log(element);
              });
              }
        }
        document.getElementById("run").addEventListener("click", () => {
              setTimeout(window.lib.getPosts(getPost), 2000);
        });












    /* window.lib.getPosts()
    
    
    
    document.getElementById("run").addEventListener("click", timeFunction);
    
    function timeFunction() {
 setTimeout(function(){ window.lib.getPosts(callback); }, 3000);
} */
    

    

//    
//    
//    
//    
//    
//    
//    
//    
//    document.getElementById("run").addEventListener("click", mySandwich);
//    
//    function callback (callback){
//        
//        
//    }
//    
//    callback(window.lib.getPosts(callback));
//    
//    // your code here
//    
//    window.lib.getPosts(callback);
//    
//    setTimeout(window.lib.getPosts, 3000, callback)
//    
//    
//    var rotator = function(){
//  widget.Rotator.rotate();
//  setTimeout(rotator,5000);
//};
//rotator();
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    function mySandwich(param1, param2, callback) {
//  console.log(param1 + ', ' + param2);
//  callback();
//}
})();
