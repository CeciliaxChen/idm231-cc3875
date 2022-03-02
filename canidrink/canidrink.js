const submitButton = document.querySelector(".js-submit-button");

submitButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    // When you submit, this will prevent the default behavior and send the form to nowhere 
    
    const divElement = document.querySelector("[data-content-area");
    const dateInput = document.querySelector(".js-date-input");
    // const dateValue = dateInput.value;

    let birthDate = new Date(dateInput.value);
    let month = birthDate.getMonth() + 1;
    let day = birthDate.getDate() + 1;
    let year = birthDate.getFullYear();
    // console.log(dataValue);
    // console.log(month, day, year);
    const usersAge = getAge(year);

    if (usersAge > 21) {
        divElement.innerHTML = `<p> You can drink because you were born in ${year} </p>`
    } else {
        divElement.innerHTML = `<p> You can't drink because you were born in ${year} </p>`
    }
});


function getAge(inputYear) {
    // take current year = 2022 
    const currentYear = new Date().getFullYear();
    // get passed in input year
    const year = inputYear;
    // calculate age
    const age = currentYear - year;
    // console.log(age);
    return age;
 }