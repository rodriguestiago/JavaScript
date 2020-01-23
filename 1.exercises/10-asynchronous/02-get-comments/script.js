/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function getComment(error, article) {
        if (error) {
            console.log(error);
        }else {
            article.forEach(element => {
            window.lib.getComments(element.id, (error, coms => {
                if (error) {
                    console.log(error);
                    }else {
                        let array = coms;
                        element.comments = array;
                    }
                    console.log(element);
            }));
        });
    }
    }
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts(getComment);
    })
    // your code here
})();
