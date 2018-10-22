

let sound;

const button1 = document.getElementById('noise-1');
const button2 = document.getElementById("noise-2");
const button3 = document.getElementById("noise-3");
const button4 = document.getElementById("noise-4");
const button5 = document.getElementById("noise-5");
const button6 = document.getElementById("noise-6");

const sound1 = document.getElementById("noise-1a");
const sound2 = document.getElementById("noise-2a");
const sound3 = document.getElementById("noise-3a");
const sound4 = document.getElementById("noise-4a");
const sound5 = document.getElementById("noise-5a");
const sound6 = document.getElementById("noise-6a");

sound = sound1;

button1.addEventListener('click', function() {
  removeActive();
  sound = sound1;
  button1.classList.add('active');
  console.log('clicked');
});

button2.addEventListener('click', function () {
  removeActive();
  sound = sound2;
  button2.classList.toggle('active');
});

button3.addEventListener("click", function() {
  removeActive();
  sound = sound3;
  button3.classList.add("active");
});

button4.addEventListener("click", function () {
  removeActive();
  sound = sound4;
  button4.classList.add("active"); 
});

button5.addEventListener("click", function() {
  removeActive();
  sound = sound5;
  button5.classList.add("active"); 
});

button6.addEventListener("click", function () {
  removeActive();
  sound = sound6;
  button6.classList.add("active");
});

//if button 1 is clicked sound = sound1
//



const btn = document.querySelector('.btn');
const btnPushed = document.querySelector('.btn-pushed');


btn.addEventListener('click', function() {
    btn.style.display = 'none';
    btnPushed.style.display = 'block';
   
    setTimeout(() => {
        btnRaise();
    }, 100);
})




var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    sound.pause();
  } else {
    sound.play();
  }
}

console.log(sound)
sound.onplaying = function() {
  isPlaying = true;
};
sound.onpause = function() {
  isPlaying = false;
};






function btnRaise() {
    btnPushed.style.display = 'none';
    btn.style.display = 'block';
}


//function to remove the active class

function removeActive() {

const allButtons = document.querySelectorAll(".button"); 

console.log(allButtons);

Array.from(allButtons).forEach(function(button){
  button.classList.remove('active');
})

}


