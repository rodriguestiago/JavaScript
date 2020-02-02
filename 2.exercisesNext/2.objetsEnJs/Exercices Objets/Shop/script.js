let objets = [
  {
    title : "Epee",
    physic : 5,
    magic : 45.99,
    minLevel  : 45.99,
    available: true
  },
  {
    title : "Hache",
    physic : 10,
    magic : 123.75,
    minLevel  : 45.99,
    available: false
  },
  {
    title : "Sceptre",
    physic : 2,
    magic : 399.50,
    minLevel  : 45.99,
    available: true
  }
];

function showAvailable(){
   for (var i=0; i < 3 ;i++)   
      if (objets[i].available = true){
          console.log(objets[i].title);
      }
       
//       console.log("Titre: " + objets[i].title);
}
showAvailable();
   