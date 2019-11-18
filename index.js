var no=document.querySelectorAll(".drum").length;
for(var i=0;i<no;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    var letter=this.innerHTML;
    makeSound(letter);
    animation(letter);

  });
}
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  animation(event.key);
});
function makeSound(key){
  switch(key){
    case "w":
    var crash=new Audio("sounds/crash.mp3");
    crash.play();
    break;
    case "a":
    var kick=new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
    case "s":
    var snare=new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "d":
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "j":
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "k":
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "l":
    var tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    default:
    console.log(letter); //  default case just in case

  }
}
function animation(currentKey){
  var activeButton=document.querySelector("." + currentKey);
 activeButton.classList.add("pressed");  // adding class so that it inherits the style prop to create the shadow
 setTimeout(function() {
   activeButton.classList.remove("pressed");
 }, 100); //milliseconds
}
