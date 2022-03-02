let month = "";
let day = "";

let season = "";

const submitButton = document.querySelector('.js-submit-button');
submitButton.addEventListener('click', function(event){
  event.preventDefault();
  getBirthday();
});

function getBirthday(){
  const formInput = document.querySelector(".js-date-input");
  const date = new Date(formInput.value); 
  month = date.getMonth() +1;
  day = date.getDay() +1;
  
  //if statement for spring
  if ((month == 3 && day >= 22) || (month == 4 || month ==5) || (month == 6 && day<=21)){
    season = "spring";
  }
  //if statement for summer
  if ((month == 6 && day >= 22) || (month == 7 || month ==8) || (month == 9 && day<=21)){
    season = "summer";
  }
  //if statement for fall
  if ((month == 9 && day >= 22) || (month == 10 || month ==11) || (month == 12 && day<=21)){
    season = "fall";
  }
  //if statment for winter
  if ((month == 12 && day >= 22) || (month == 1 || month ==2) || (month == 3 && day<=21)){
    season = "winter";
  }

  const seasonText = document.querySelector('.js-season-text');
  seasonText.innerHTML = "Your season is " + season + "! Yay!";
  seasonText.style.display = "block";
}

