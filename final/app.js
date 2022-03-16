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
    console.log(month);
    console.log(day);
    
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
      charaImg = "zodiacimages/pakku-water-04.png";
      charaBio = "You are Pakku!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (sagittarius)
    else if ((month == 11 && day >= 22) || (month == 12 && day<=21)){
      character = "Iroh";
      charaImg = "zodiacimages/iroh-fire-07.png";
      charaBio = "You are Iroh!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (capricorn)
    else if ((month == 12 && day >= 22) || (month == 1 && day<=19)){
      character = "Kiyoshi";
      charaImg = "zodiacimages/kiyoshi-earth-11.png";
      charaBio = "You are Kiyoshi!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (aquarius)
    else if ((month == 1 && day >= 20) || (month == 2 && day<=18)){
      character = "Appa";
      charaImg = "zodiacimages/air-appa-03.png";
      charaBio = "You are Appa!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (pisces)
    else if ((month == 2 && day >= 19) || (month == 3 && day<=20)){
      character = "Katara";
      charaImg = "zodiacimages/katara-water-05.png";
      charaBio = "You are Katara!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (aries)
    else if ((month == 3 && day >= 21) || (month == 4 && day<=19)){
      character = "Zuko";
      charaImg = "zodiacimages/zuko-fire-08.png";
      charaBio = "You are Zuko!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (taurus)
    else if ((month == 4 && day >= 20) || (month == 5 && day<=20)){
      character = "Toph";
      charaImg = "zodiacimages/toph-earth-12.png";
      charaBio = "You are Toph!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (gemini)
    else if ((month == 5 && day >= 21) || (month == 6 && day<=20)){
      character = "Momo";
      charaImg = "zodiacimages/air-momo-02.png";
      charaBio = "You are Momo!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (cancer)
    else if ((month == 6 && day >= 21) || (month == 7 && day<=22)){
      character = "Sokka";
      charaImg = "zodiacimages/sokka-water-06.png";
      charaBio = "You are Sokka!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (leo)
    else if ((month == 7 && day >= 23) || (month == 8 && day<=22)){
      character = "Mako";
      charaImg = "zodiacimages/mako-fire-09.png";
      charaBio = "You are Mako!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (virgo)
    else if ((month == 8 && day >= 23) || (month == 9 && day<=22)){
      character = "Bolin";
      charaImg = "zodiacimages/bolin-earth-10.png";
      charaBio = "You are Bolin!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    }; 

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



function getCharacter(){
  const button=document.querySelector
}

// var Audio = new Audio(____.mp3)
// audio.play();


// Array of buttons - [button1, button2, button3]
const charaButtons = document.querySelectorAll(".js-chara-button");

// Loop through all buttons
charaButtons.forEach(function (individualButtonElement) {
  // Get the value of the "data-character" attribute on this button
  const charaName = individualButtonElement.getAttribute("data-character");
  // Add click event listener to each button
  console.log(charaName);
  individualButtonElement.addEventListener("click", function () {
        //if statement for aang (libra) 
        if (charaName == "aang"){
          character = "Aang";
          charaImg = "zodiacimages/air-aang-01.png";
          charaBio = "You are Aang!";
          soundEffectmp3 = "sounds/aang-sound.mp3";
          soundEffectogg = "sounds/aang-sound.ogg";
        }
        //if statement for (scorpio)
        else if ((month == 10 && day >= 23) || (month == 11 && day<=21)){
          character = "Pakku";
          charaImg = "zodiacimages/pakku-water-04.png";
          charaBio = "You are Pakku!";
          soundEffectmp3 = "sounds/aang-sound.mp3";
          soundEffectogg = "sounds/aang-sound.ogg";
        } 
        //if statement for (sagittarius)
        else if ((month == 11 && day >= 22) || (month == 12 && day<=21)){
          character = "Iroh";
          charaImg = "zodiacimages/iroh-fire-07.png";
          charaBio = "You are Iroh!";
          soundEffectmp3 = "sounds/aang-sound.mp3";
          soundEffectogg = "sounds/aang-sound.ogg";
        } 
        //if statement for (capricorn)
        else if ((month == 12 && day >= 22) || (month == 1 && day<=19)){
          character = "Kiyoshi";
          charaImg = "zodiacimages/kiyoshi-earth-11.png";
          charaBio = "You are Kiyoshi!";
          soundEffectmp3 = "sounds/aang-sound.mp3";
          soundEffectogg = "sounds/aang-sound.ogg";
        } 
        //if statement for (aquarius)
        else if ((month == 1 && day >= 20) || (month == 2 && day<=18)){
          character = "Appa";
          charaImg = "zodiacimages/air-appa-03.png";
          charaBio = "You are Appa!";
          soundEffectmp3 = "sounds/aang-sound.mp3";
          soundEffectogg = "sounds/aang-sound.ogg";
        } 
        //if statement for (pisces)
        else if ((month == 2 && day >= 19) || (month == 3 && day<=20)){
          character = "Katara";
          charaImg = "zodiacimages/katara-water-05.png";
          charaBio = "You are Katara!";
          soundEffectmp3 = "sounds/aang-sound.mp3";
          soundEffectogg = "sounds/aang-sound.ogg";
        } 
        //if statement for (aries)
        else if ((month == 3 && day >= 21) || (month == 4 && day<=19)){
          character = "Zuko";
          charaImg = "zodiacimages/zuko-fire-08.png";
          charaBio = "You are Zuko!";
          soundEffectmp3 = "sounds/aang-sound.mp3";
          soundEffectogg = "sounds/aang-sound.ogg";
        } 
        //if statement for (taurus)
        else if ((month == 4 && day >= 20) || (month == 5 && day<=20)){
          character = "Toph";
          charaImg = "zodiacimages/toph-earth-12.png";
          charaBio = "You are Toph!";
          soundEffectmp3 = "sounds/aang-sound.mp3";
          soundEffectogg = "sounds/aang-sound.ogg";
        } 
        //if statement for (gemini)
        else if ((month == 5 && day >= 21) || (month == 6 && day<=20)){
          character = "Momo";
          charaImg = "zodiacimages/air-momo-02.png";
          charaBio = "You are Momo!";
          soundEffectmp3 = "sounds/aang-sound.mp3";
          soundEffectogg = "sounds/aang-sound.ogg";
        } 
        //if statement for (cancer)
        else if ((month == 6 && day >= 21) || (month == 7 && day<=22)){
          character = "Sokka";
          charaImg = "zodiacimages/sokka-water-06.png";
          charaBio = "You are Sokka!";
          soundEffectmp3 = "sounds/aang-sound.mp3";
          soundEffectogg = "sounds/aang-sound.ogg";
        } 
        //if statement for (leo)
        else if ((month == 7 && day >= 23) || (month == 8 && day<=22)){
          character = "Mako";
          charaImg = "zodiacimages/mako-fire-09.png";
          charaBio = "You are Mako!";
          soundEffectmp3 = "sounds/aang-sound.mp3";
          soundEffectogg = "sounds/aang-sound.ogg";
        } 
        //if statement for (virgo)
        else if ((month == 8 && day >= 23) || (month == 9 && day<=22)){
          character = "Bolin";
          charaImg = "zodiacimages/bolin-earth-10.png";
          charaBio = "You are Bolin!";
          soundEffectmp3 = "sounds/aang-sound.mp3";
          soundEffectogg = "sounds/aang-sound.ogg";
        }; 
    
        setValues();
  });
});




