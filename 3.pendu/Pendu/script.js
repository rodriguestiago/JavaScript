//let giveLetter = prompt("Rentrez une lettre (en majuscule)");



let giveLetter = "U";
let letters = [
  "B",
  "O",
  "N",
  "J",
  "O",
  "U",
  "R",
];
let PlayerLetters = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];


let isInArray = '';
function guessLetter(){
    isInArray = letters.includes(giveLetter);
    //return isInArray.valueOf;
//console.log(isInArray); 
    
    if (isInArray == true){
        //alert("true");
        
        
        if(giveLetter == "B"){
            PlayerLetters.splice(0, 1, giveLetter);
            console.log(PlayerLetters);
            
            
            
            let t = prompt("Rentrez une lettre (en majuscule)");
    
            
//            if(t = "N"){
//                PlayerLetters.splice(2, 1, t);
//                console.log(PlayerLetters);
//            }
            
            
           }
        
        
        else if(giveLetter == "O"){
            PlayerLetters.splice(1, 1, giveLetter);
            PlayerLetters.splice(4, 1, giveLetter);
        }
        else if(giveLetter == "N"){
            PlayerLetters.splice(2, 1, giveLetter);
        }
        else if(giveLetter == "J"){
            PlayerLetters.splice(3, 1, giveLetter);
        }
        else if(giveLetter == "O"){
            PlayerLetters.splice(4, 1, giveLetter);
        }
        else if(giveLetter == "U"){
            PlayerLetters.splice(5, 1, giveLetter);
        }
        else{
            PlayerLetters.splice(6, 1, giveLetter);
        }
        console.log(PlayerLetters);
        
        
        
        
//        PlayerLetters.splice(0, 1, giveLetter);
        
        //PlayerLetters.push(giveLetter);
        
        }
    else{
        guessWord();
    }
    
}

let theWord = '';
function guessWord(){
    if(theWord = giveLetter.includes("BONJOUR")){
       alert("Vous avez gagné");
    console.log(letters);
       
       }
    else {
        console.log(PlayerLetters);
    }
    
    
//     theWord = giveLetter.includes("BONJOUR");
//  
//alert("Vous avez gagné");
//    console.log(letters);
//    
    
    
    
//    if (isInArray == true){
//}
}

//save value entered in a variable and show onload
guessLetter();


//
//function guessLetter(){
//    if (giveLetter == letters){
//        console.log("true");
//    }
//    else{
//        console.log("false");
//    }
//    
//}
//guessLetter();