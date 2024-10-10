const backgroundImage = document.getElementById("container")
const summerBtn = document.getElementById("summer_btn")
const winterBtn = document.getElementById("winter_btn")
const mansoonBtn = document.getElementById("mansoon_btn")

function resetButtonStyles() {
    summerBtn.style.backgroundColor = "";
    winterBtn.style.backgroundColor = ""; 
    mansoonBtn.style.backgroundColor = ""; 
}
function summerImage(){
    resetButtonStyles()
    backgroundImage.style.backgroundImage="url('./images/summer.jpg')"
    summerBtn.style.backgroundColor = "#ff9900"
}
function winterImage(){
    resetButtonStyles()
    backgroundImage.style.backgroundImage =" url('./images/winter.jpg')"
    winterBtn.style.backgroundColor = "#ff9900"
}
function mansoonImage(){
    resetButtonStyles()
    backgroundImage.style.backgroundImage = "url('./images/mansoon.jpg')"
    mansoonBtn.style.backgroundColor = "#ff9900"
}