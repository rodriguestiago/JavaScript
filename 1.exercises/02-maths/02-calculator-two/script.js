/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    
    const performOperation = operation => {



        var num1 = document.getElementById("op-one").value;
        var num2 = document.getElementById("op-two").value;
        var result;

        switch (operation) {
            case 'addition':
                result = parseInt(num1) + parseInt(num2);
                break;
            case 'substraction':
                result = parseInt(num1) - parseInt(num2);
                break;
            case 'multiplication':
                result = parseInt(num1) * parseInt(num2);
                break;
            case 'division':
                result = parseInt(num1) / parseInt(num2);
                break;

        }
        alert(result);
    
    
        

        
        /* 
        let a = document.getElementById("op-one").value;
        let b = document.getElementById("op-two").value;
        let operator = document.getElementsByClassName("operator").value;
        let result = "";
        
        alert(result);
        
        switch(operator)
            {
//                case 'addition' : alert(parseInt(a) + parseInt(b)) ;  
                    case 'addition' : 
                    alert(result = a + b );
                    break;
                    
                    case 'substraction' : 
                    alert(parseInt(a) + parseInt(b)) ;
                    break;
                    
                default: 
                    alert("rien ")
                    break;
                    
                    
            }
             */
            
         
        
        
        
        
        
        
        
        
        
//        
//        function calc(){
//            let a = document.getElementById("op-one").value;
//            let b = document.getElementById("op-two").value;
//            let x = document.getElementById("addition").value;
//            
//            switch(x)
//            {
////                case 'addition' : alert(parseInt(a) + parseInt(b)) ;  
//                    case "addition" : 
//                    alert(parseInt(a) + parseInt(b));  
//                    break;
//                    
//                default: 
//                    alert("rien ")
//                    break;
//                    
//                    
//            }
//            
//            
//            
//        }
//        
//        calc();
//        
        
        
        
        
        
        
        
        
      //function calc(a, b, x){
//    let a = document.getElementById("op-one").value;
//    let b = document.getElementById("op-two").value;
//      
//
//        
//        
//    let x = document.getElementById("addition").value;
//        
//        
//        alert(a + b);
//        switch(x){
//            case 'addition' : alert((parseInt(a) +  parseInt(b)) );
//            break;
//        }
    //}
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
