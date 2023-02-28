var myImages =["https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png","https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png","https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/600px-0025Pikachu.png","https://archives.bulbagarden.net/media/upload/thumb/8/80/0384Rayquaza.png/250px-0384Rayquaza.png"];


var captionImages =["This pokemon has 4 arms and is very strong","This pokemon is a lizard on fire","This pokemon is very big and sleepy","This pokemon is a lightning rat","This pokemon is a flying dragon snake"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 
