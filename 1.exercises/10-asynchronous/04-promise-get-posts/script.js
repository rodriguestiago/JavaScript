/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts().then( 
            /*then faire apres la fonction */
            function tarace(article)
            /* la fonction qui a comme parametre article */
            {
                console.log(article)

            }

        )
    

        })







        /* document.getElementById("run").addEventListener("click", () => {
            const promise = window.lib.getPosts();
            promise.then(function(value){
                    console.log(value);
                }),
                (error => {
                    console.error(error); 
            });
        }); */
 
    // your code here
})();
