let firstName = "Tiago";
let character, x;

character = {
	name : firstName,
	age : 21,
	items_to_give : ["papier","telecommande","clé"],
    
    giveItem(){
      var taille = this.items_to_give.length-1;
      //console.log("taille item: " + taille);
      var numeroItem = Math.floor(Math.random() * (taille+1)*10/10);
      //console.log("indice objet=" + numeroItem);
      var itemgived = this.items_to_give[numeroItem];
      //console.log("name item:"+ itemgived);
      return itemgived;
    }
};

for (x in character) {
  console.log( character[x]);
}


console.log("Item donné = " + character.giveItem());