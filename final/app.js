let month = "";
let day = "";

let character = "";
let charaImg = "";
let charaBio = "";
let soundEffectmp3 = "";
let soundEffectogg = "";

let helping = false;



// When inputting birthday 

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
      charaBio = "Because your birthday falls between September 23rd and October 22nd, you are similar to the avatar himself! Just like Aang, friendly, charming, empathetic, extrovert-like, you prioritise and embody balance. Ready to bring balance to the world?";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    }
    //if statement for (scorpio)
    else if ((month == 10 && day >= 23) || (month == 11 && day<=21)){
      character = "Pakku";
      charaImg = "zodiacimages/pakku-water-04.png";
      charaBio = "Because your birthday falls between October 23rd and November 21st, you are just like the discreet waterbending master! Not only are you elusive and mysterious, you are also so passionate, psychically-charged, fierce, and undoubtably loyal. If so, you are just like Pakku!";
      soundEffectmp3 = "sounds/pakku-sound.mp3";
      soundEffectogg = "sounds/pakku-sound.ogg";
    } 
    //if statement for (sagittarius)
    else if ((month == 11 && day >= 22) || (month == 12 && day<=21)){
      character = "Iroh";
      charaImg = "zodiacimages/iroh-fire-07.png";
      charaBio = "Because your birthday falls between November 22nd and December 21st, you are like the tea-loving Uncle Iroh! He has always been known to give meaningful and optimistic advice, being honest and intellectual about his words. 'IT IS IMPORTANT TO DRAW WISDOM FROM MANY DIFFERENT PLACES.' ~ Uncle Iroh";
      soundEffectmp3 = "sounds/iroh-sound.mp3";
      soundEffectogg = "sounds/iroh-sound.ogg";
    } 
    //if statement for (capricorn)
    else if ((month == 12 && day >= 22) || (month == 1 && day<=19)){
      character = "Kiyoshi";
      charaImg = "zodiacimages/kiyoshi-earth-11.png";
      charaBio = "Because your birthday falls between December 22nd and January 19th, you are just like the most recent earth bending avatar! Both you and Avatar Kiyoshi are ambitious when you are set on your goals in life, determined to reach them. Being practical and organised, your diligence does not got to waste!";
      soundEffectmp3 = "sounds/kiyoshi-sound.mp3";
      soundEffectogg = "sounds/kiyoshi-sound.ogg";
    } 
    //if statement for (aquarius)
    else if ((month == 1 && day >= 20) || (month == 2 && day<=18)){
      character = "Appa";
      charaImg = "zodiacimages/air-appa-03.png";
      charaBio = "Because your birthday falls between January 20th to February 18th, you are akin to one of our favourite fuzzy friends! Not only are you and Appa self-reliant and independent, both of you are calm and sensitive in the best way possible. Get ready to have more flying adventures!";
      soundEffectmp3 = "sounds/appa-sound.mp3";
      soundEffectogg = "sounds/appa-sound.ogg";
    } 
    //if statement for (pisces)
    else if ((month == 2 && day >= 19) || (month == 3 && day<=20)){
      character = "Katara";
      charaImg = "zodiacimages/katara-water-05.png";
      charaBio = "Because your birthday falls between February 19th and March 20th, you and Katara could be really good friends who would have commonalities between each other. Katara is known to be the emotionally-aware one of the group. Gracious, creative, imaginative, sensitive, you are appreciated and loved for being yourself by your loved ones!";
      soundEffectmp3 = "sounds/katara-sound.mp3";
      soundEffectogg = "sounds/katara-sound.ogg";
    } 
    //if statement for (aries)
    else if ((month == 3 && day >= 21) || (month == 4 && day<=19)){
      character = "Zuko";
      charaImg = "zodiacimages/zuko-fire-08.png";
      charaBio = "Because your birthday falls between March 21st and April 19th, you are similar to the Fire Nation scarred-prince! Just like Zuko, initiative, high-energy, driven, you are motivated, confident, and straightforward. Don't worry, you have restored your honour just be being here!";
      soundEffectmp3 = "sounds/zuko-sound.mp3";
      soundEffectogg = "sounds/zuko-sound.ogg";
    } 
    //if statement for (taurus)
    else if ((month == 4 && day >= 20) || (month == 5 && day<=20)){
      character = "Toph";
      charaImg = "zodiacimages/toph-earth-12.png";
      charaBio = "Because your birthday falls between April 20th and May 20th, you are just like our favourite melon lord, Toph! Tough, dependable, stubborn, and chill, you are ready to take on the world head-on in your own way. Maybe find yourself a 'Twinkle-Toes' too!";
      soundEffectmp3 = "sounds/toph-sound.mp3";
      soundEffectogg = "sounds/toph-sound.ogg";
    } 
    //if statement for (gemini)
    else if ((month == 5 && day >= 21) || (month == 6 && day<=20)){
      character = "Momo";
      charaImg = "zodiacimages/air-momo-02.png";
      charaBio = "Because your birthday falls between May 21st and June 20th, you are like the playful and funny Momo! Being flexible, clever, fun, and infectious, you and Momo would probably get along as if you were twins your whole life! Life is too short if you don't indulge in your curiosities.";
      soundEffectmp3 = "sounds/momo-sound.mp3";
      soundEffectogg = "sounds/momo-sound.ogg";
    } 
    //if statement for (cancer)
    else if ((month == 6 && day >= 21) || (month == 7 && day<=22)){
      character = "Sokka";
      charaImg = "zodiacimages/sokka-water-06.png";
      charaBio = "Because your birthday falls between June 21st and July 22nd, you and Sokka could probably click like you have been best bros since forever. He is known to be goofy, protective, nurturing; does that sound like you? 'This is my friend, Foofoocuddlypoops.' ~ Sokka";
      soundEffectmp3 = "sounds/sokka-sound.mp3";
      soundEffectogg = "sounds/sokka-sound.ogg";
    } 
    //if statement for (leo)
    else if ((month == 7 && day >= 23) || (month == 8 && day<=22)){
      character = "Mako";
      charaImg = "zodiacimages/mako-fire-09.png";
      charaBio = "Because your birthday falls between July 23rd and August 22nd, you are akin to the best big brother, Mako! Despite having the ability to be cold to people, you can also be very fierce, charismatic, dramatic, and sassy. They may judge you and tell you what they think with sass, but most of the time, they aren't trying to offend you, it's just their personality. 'Your Best Friend Is A Polar Bear Dog. Somehow, That Makes Perfect Sense.' ~ Mako";
      soundEffectmp3 = "sounds/mako-sound.mp3";
      soundEffectogg = "sounds/mako-sound.ogg";
    } 
    //if statement for (virgo)
    else if ((month == 8 && day >= 23) || (month == 9 && day<=22)){
      character = "Bolin";
      charaImg = "zodiacimages/bolin-earth-10.png";
      charaBio = "Because your birthday falls between August 23rd and September 22nd, you give off Bolin vibes! You are reliable but stubborn, meticulous and practical, kind but critical. Does this sound like you? You should tell yourself, 'Don't be nervous, you're gonna do great! I believe in you!' ~ Bolin";
      soundEffectmp3 = "sounds/bolin-sound.mp3";
      soundEffectogg = "sounds/bolin-sound.ogg";
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








// when just clicking on button

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
          charaBio = "Because your birthday falls between September 23rd and October 22nd, you are similar to the avatar himself! Just like Aang, friendly, charming, empathetic, extrovert-like, you prioritise and embody balance. Ready to bring balance to the world?!";
          soundEffectmp3 = "sounds/aang-sound.mp3";
          soundEffectogg = "sounds/aang-sound.ogg";
        }
        //if statement for (scorpio)
        else if (charaName == "pakku"){
          character = "Pakku";
          charaImg = "zodiacimages/pakku-water-04.png";
          charaBio = "Because your birthday falls between October 23rd and November 21st, you are just like the discreet waterbending master! Not only are you elusive and mysterious, you are also so passionate, psychically-charged, fierce, and undoubtably loyal. If so, you are just like Pakku!";
          soundEffectmp3 = "sounds/pakku-sound.mp3";
          soundEffectogg = "sounds/pakku-sound.ogg";
        } 
        //if statement for (sagittarius)
        else if (charaName == "iroh"){
          character = "Iroh";
          charaImg = "zodiacimages/iroh-fire-07.png";
          charaBio = "Because your birthday falls between November 22nd and December 21st, you are like the tea-loving Uncle Iroh! He has always been known to give meaningful and optimistic advice, being honest and intellectual about his words. 'IT IS IMPORTANT TO DRAW WISDOM FROM MANY DIFFERENT PLACES.' ~ Uncle Iroh";
          soundEffectmp3 = "sounds/iroh-sound.mp3";
          soundEffectogg = "sounds/iroh-sound.ogg";
        } 
        //if statement for (capricorn)
        else if (charaName == "kiyoshi"){
          character = "Kiyoshi";
          charaImg = "zodiacimages/kiyoshi-earth-11.png";
          charaBio = "Because your birthday falls between December 22nd and January 19th, you are just like the most recent earth bending avatar! Both you and Avatar Kiyoshi are ambitious when you are set on your goals in life, determined to reach them. Being practical and organised, your diligence does not got to waste!";
          soundEffectmp3 = "sounds/kiyoshi-sound.mp3";
          soundEffectogg = "sounds/kiyoshi-sound.ogg";
        } 
        //if statement for (aquarius)
        else if (charaName == "appa"){
          character = "Appa";
          charaImg = "zodiacimages/air-appa-03.png";
          charaBio = "Because your birthday falls between January 20th to February 18th, you are akin to one of our favourite fuzzy friends! Not only are you and Appa self-reliant and independent, both of you are calm and sensitive in the best way possible. Get ready to have more flying adventures!";
          soundEffectmp3 = "sounds/appa-sound.mp3";
          soundEffectogg = "sounds/appa-sound.ogg";
        } 
        //if statement for (pisces)
        else if (charaName == "katara"){
          character = "Katara";
          charaImg = "zodiacimages/katara-water-05.png";
          charaBio = "Because your birthday falls between February 19th and March 20th, you and Katara could be really good friends who would have commonalities between each other. Katara is known to be the emotionally-aware one of the group. Gracious, creative, imaginative, sensitive, you are appreciated and loved for being yourself by your loved ones!";
          soundEffectmp3 = "sounds/katara-sound.mp3";
          soundEffectogg = "sounds/katara-sound.ogg";
        } 
        //if statement for (aries)
        else if (charaName == "zuko"){
          character = "Zuko";
          charaImg = "zodiacimages/zuko-fire-08.png";
          charaBio = "Because your birthday falls between March 21st and April 19th, you are similar to the Fire Nation scarred-prince! Just like Zuko, bold, initiative, high-energy, driven, you are motivated, confident, and straightforward. Don't worry, you have restored your honour just be being here!";
          soundEffectmp3 = "sounds/zuko-sound.mp3";
          soundEffectogg = "sounds/zuko-sound.ogg";
        } 
        //if statement for (taurus)
        else if (charaName == "toph"){
          character = "Toph";
          charaImg = "zodiacimages/toph-earth-12.png";
          charaBio = "Because your birthday falls between April 20th and May 20th, you are just like our favourite melon lord, Toph! Tough, dependable, stubborn, and chill, you are ready to take on the world head-on in your own way. Maybe find yourself a 'Twinkle-Toes' too!";
          soundEffectmp3 = "sounds/toph-sound.mp3";
          soundEffectogg = "sounds/toph-sound.ogg";
        } 
        //if statement for (gemini)
        else if (charaName == "momo"){
          character = "Momo";
          charaImg = "zodiacimages/air-momo-02.png";
          charaBio = "Because your birthday falls between May 21st and June 20th, you are like the playful and funny Momo! Being flexible, clever, fun, and infectious, you and Momo would probably get along as if you were twins your whole life! Life is too short if you don't indulge in your curiosities.";
          soundEffectmp3 = "sounds/momo-sound.mp3";
          soundEffectogg = "sounds/momo-sound.ogg";
        } 
        //if statement for (cancer)
        else if (charaName == "sokka"){
          character = "Sokka";
          charaImg = "zodiacimages/sokka-water-06.png";
          charaBio = "Because your birthday falls between June 21st and July 22nd, you and Sokka could probably click like you have been best bros since forever. He is known to be goofy, protective, nurturing; does that sound like you? 'This is my friend, Foofoocuddlypoops.' ~ Sokka";
          soundEffectmp3 = "sounds/sokka-sound.mp3";
          soundEffectogg = "sounds/sokka-sound.ogg";
        } 
        //if statement for (leo)
        else if (charaName == "mako"){
          character = "Mako";
          charaImg = "zodiacimages/mako-fire-09.png";
          charaBio = "Because your birthday falls between July 23rd and August 22nd, you are akin to the best big brother, Mako! Despite having the ability to be cold to people, you can also be very fierce, charismatic, dramatic, and sassy. They may judge you and tell you what they think with sass, but most of the time, they aren't trying to offend you, it's just their personality. 'Your Best Friend Is A Polar Bear Dog. Somehow, That Makes Perfect Sense.' ~ Mako";
          soundEffectmp3 = "sounds/mako-sound.mp3";
          soundEffectogg = "sounds/mako-sound.ogg";
        } 
        //if statement for (virgo)
        else if (charaName == "bolin"){
          character = "Bolin";
          charaImg = "zodiacimages/bolin-earth-10.png";
          charaBio = "Because your birthday falls between August 23rd and September 22nd, you give off Bolin vibes! You are reliable but stubborn, meticulous and practical, kind but critical. Does this sound like you? You should tell yourself, 'Don't be nervous, you're gonna do great! I believe in you!' ~ Bolin";
          soundEffectmp3 = "sounds/bolin-sound.mp3";
          soundEffectogg = "sounds/bolin-sound.ogg";
        }; 
    
        setValues();
  });
});







// ATTEMPT AT OPEN AND CLOSE BUTTON


// // show/hide with button

// const showHelp = () => {
//   // get help div
//   const helpButton = document.querySelector('.js-help-container');

//   // hide help div if showing
//   if (helping) {
//     helpButton.style.display="none";
//     helping = false;
//   }
//   // show help div if not showing
//   else {
//     helpButton.style.display="flex";
//     helping = true;
//   }

// // switching between icons and help
// displayCharacterGallery(helping);
// };





// // show/hide character gallery

// function displayCharacterGallery(hiding) {
//   const CharacterGallery = document.querySelector('.js-chara-gallery');
//   if (hiding){
//     CharacterGallery.style.display="none";
//   }
//   else {
//     CharacterGallery.style.display="flex";
//   }
// }


// // get element and add event for the help button
// const helpOpenButton = document.querySelector('.js-help-button-open');
// helpOpenButton.addEventListener('click', showHelp);

// // get element and add event for the close button that is displayed when the help box is visible
// const helpCloseButton = document.querySelector('.js-help-button-close');
// helpCloseButton.addEventListener('click', showHelp);