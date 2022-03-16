const clickMeButton = document.querySelector(".js-click-me");

clickMeButton.addEventListener("click", function(event) {
    const clickMeButtonContent = document.querySelector(".js-hidden-content");
    clickMeButtonContent.classList.toggle("hidden");
});




const clickMeButton2 = document.querySelector(".js-click-me-2");

clickMeButton2.addEventListener("click", function(event) {
    const clickMeButtonContent2 = document.querySelector(".js-hidden-content-2");
    if (clickMeButtonContent2.style.display == "none") {
        clickMeButtonContent2.style.display = "block";
    } else {
        clickMeButtonContent2.style.display = "none";
    }    
});



const multipleButtons = document.querySelectorAll(".js-button");

// button1, button2, button3 
multipleButtons.forEach((element) => {
    console.log("start of the loop");
    console.log(element);
    console.log("end of the loop");
    element.addEventListener("click", function(){
        // Default remove all existing open divs. 

        const allButtons = document.querySelector("[data-content]");
        allButtons.classList.remove("hidden");


        // get button attribute value 
        // [data-button-form = "content1"] or [data-button-form = "content2"] or [data-button-form = "content3"]
        const currentButtonValue = element.getAttribute("data-button-for");

        // [data-content = "content1"] or [data-content = "content2"] or [data-content = "content3"]
        const matchingContentElement = document.querySelector(
            '[data-content = "' + currentButtonValue + '"]'
        );
  
        matchingContentElement.classList.toggle("hidden");
    });
});