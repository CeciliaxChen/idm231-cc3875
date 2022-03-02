// Array of buttons - [button1, button2, button3]

const soundButtons = document.querySelectorAll(".js-sound-button");
const audioPlayer = document.querySelector("#speakers");

// Loop through all buttons 
soundButtons.forEach(function (individualButtonElement) {
    // Get value of "data-audio-file" attribute on this button 
    const audioTrackSource = individualButtonElement.getAttribute("data-audio-file");
    // Add click event listener to each button 
    individualButtonElement.addEventListener("click". function () {
        audioPlayer.src = `./soundboard/${audioTrackSource}`
        audioPlayer.play();
    });
});