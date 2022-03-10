let month = "";
let day = "";

let character = "";
let charaImg = "";
let charaBio = "";
let soundEffectmp3 = "";
let soundEffectogg = "";

const submitButton = document.querySelector(".js-submit-button");
submitButton.addEventListener('click', function(event){
    event.preventDefault();
    getBirthday();
});

function getBirthday(){
    const formInput = document.querySelector(".js-date-input");
    const date = new Date(formInput.value); 
    month = date.getMonth() +1;
    day = date.getDate() +1;
    
    //if statement for aang (libra) 
    if ((month == 9 && day >= 23) || (month == 10 && day<=22)){
      character = "Aang";
      charaImg = "zodiacimages/air-aang-01.png";
      charaBio = "You are Aang!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    }
    //if statement for (scorpio)
    else if ((month == 10 && day >= 23) || (month == 11 && day<=21)){
      character = "Pakku";
      charaImg = "zodiacimages/air-aang-01.png";
      charaBio = "You are Aang!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 

    setValues();
};

function setValues(){
    const chosenImg = document.querySelector(".character_card_img");
    const chosenBio = document.querySelector(".character_card_bio");
    const chosenMp3 = document.querySelector(".js-mp3");
    const chosenOgg = document.querySelector(".js-ogg");
    const audio = document.querySelector(".js-audio");
    
    const charaCard = document.querySelector(".character_card");


    console.log(chosenMp3);
    chosenImg.src = charaImg;
    chosenBio.innerHTML = charaBio;
    chosenMp3.src = soundEffectmp3;
    chosenOgg.src = soundEffectogg;
    audio.load();
    audio.play();
    charaCard.style.display = "flex";
}

