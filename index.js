

var i = 0;
while(i<document.querySelectorAll(".drum").length){

  document.querySelectorAll(".drum")[i].addEventListener("click" , function(){

    var button11 = this.innerHTML;
    makeSound(button11);

  });

  i++;
}


document.querySelector("h1").addEventListener("dblclick" , function(){
  alert("I got double clicked");
})


document.addEventListener("keydown" , function(event){

  makeSound(event.key);

})




function makeSound(blabla){

  switch (blabla) {
    case "w":
        var audio = new Audio("tom-1.mp3");
        audio.play();
      break;
    case "a":
        var audio1 = new Audio("tom-2.mp3");
        audio1.play();
      break;
    case "s":
        var audio2 = new Audio("tom-3.mp3");
        audio2.play();
      break;
    case "d":
        var audio3 = new Audio("tom-4.mp3");
        audio3.play();
      break;
    case "j":
        var audio4 = new Audio("snare.mp3");
        audio4.play();
      break;
    case "k":
        var audio5 = new Audio("crash.mp3");
        audio5.play();
      break;
    case "l":
        var audio6 = new Audio("kick-bass.mp3");
        audio6.play();
      break;
    case "b":
        var audioB = new Audio("guzelBerre.m4a");
        audioB.play();
      break;
    default:
      alert("I am pressed but I have no audio");

  }
}










//sakin
