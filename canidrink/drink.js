const submitButton = document.querySelector(".js-submit-button");

submitButton.addEventListener('click', function(event){
    
    event.preventDefault();

   const divElement = document.querySelector("[data-content-area]");
    const dateInput = document.querySelector(".js-date-input");
    
    // const dateValue = dateInput.value;

    let birthDate = new Date(dateInput.value);

    let month = birthDate.getMonth() + 1;

    let day = birthDate.getDate() + 1;

    let year = birthDate.getFullYear();

    const usersAge = getAge(year);

    if (usersAge>21){
        divElement.innerHTML = `<p> Hey You Can Drink Because You Were Born in ${year}</p>`
    } else {
        divElement.innerHTML = `<p> Hey You Can Not Drink Because You Were Born in ${year} >:( </p>`
    }

    });

    function getAge(inputYear) {
        const currentYear = new Date().getFullYear();

        const year = inputYear;

        const age = currentYear - year;
        console.log(age);
    }
