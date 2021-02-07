// main.js

// TODO
var vslider = document.getElementById("volume-slider");
var outputslider = document.getElementById("volume-number");
var vimage = document.getElementById("volume-image");
var sbutton = document.getElementById("honk-btn");
var airhorn = document.getElementById("radio-air-horn");
var carhorn = document.getElementById("radio-car-horn");
var partyhorn = document.getElementById("radio-party-horn");
var hornsound = document.getElementById("horn-sound");
var soundimage = document.getElementById("sound-image");
//var radioselect = document.getElementById("audio-selection");
var turnin = document.getElementById("honk-btn");

airhorn.oninput = function () {
    if (airhorn.checked = true) {
        hornsound.src = "./assets/media/audio/air-horn.mp3";
        hornsound.alt = "Air Horn";
        soundimage.src = "./assets/media/audio/air-horn.svg";
    }
}
carhorn.oninput = function () {
    if (carhorn.checked = true) {
        hornsound.src = "./assets/media/audio/car-horn.mp3";
        hornsound.alt = "Car Horn";
        soundimage.src = "./assets/media/images/car.svg";
    }
}
partyhorn.oninput = function () {
    if (partyhorn.checked = true) {
        hornsound.src = "./assets/media/audio/party-horn.mp3";
        hornsound.alt = "Party Horn";
        soundimage.src = "./assets/media/images/party-horn.svg";
    }
}


outputslider.value = vslider.value;
vslider.oninput = function () {
    outputslider.value = this.value; 
    if(outputslider.value >= 67 && outputslider.value <= 100) {
        vimage.src = "./assets/media/icons/volume-level-3.svg"

    }
    else if (outputslider.value >= 34 && outputslider.value <= 66) {
        vimage.src = "./assets/media/icons/volume-level-2.svg"
    } 
    else if (outputslider.value >= 1 && outputslider.value <= 33) {
        vimage.src = "./assets/media/icons/volume-level-1.svg"
    } 
    else {
        vimage.src = "./assets/media/icons/volume-level-0.svg"
        sbutton.disabled = true;
    } 
} 


outputslider.oninput = function () {
    vslider.value = this.value;
    if (outputslider.value >= 67 && outputslider.value <= 100) {
        vimage.src = "./assets/media/icons/volume-level-3.svg"
    }
    else if (outputslider.value >= 34 && outputslider.value <= 66) {
        vimage.src = "./assets/media/icons/volume-level-2.svg"
    }
    else if (outputslider.value >= 1 && outputslider.value <= 33) {
        vimage.src = "./assets/media/icons/volume-level-1.svg"
    }
    else {
        vimage.src = "./assets/media/icons/volume-level-0.svg"
        sbutton.disabled = true;
    }  
}

turnin.addEventListener("click", function (ev) {
    ev.preventDefault();
    hornsound.volume = (outputslider.value)/100;
    hornsound.play();
});