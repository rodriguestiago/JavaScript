let giveLetter = prompt("Rentrez une lettre (en majuscule)");



//let giveLetter = "BONJOUR";
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
            let t = prompt("Rentrez une lettre (en majuscule)");

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
        
        
        
        
        
//        PlayerLetters.splice(0, 1, giveLetter);
        
        //PlayerLetters.push(giveLetter);
        console.log(PlayerLetters);
        }
    else{
        guessWord();
    }
    
}

let theWord = '';
function guessWord(){
     theWord = giveLetter.includes("BONJOUR");
  
alert("Vous avez gagné");
    console.log(letters);
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