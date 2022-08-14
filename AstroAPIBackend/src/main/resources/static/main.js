//Displays Star button and hides Galaxy and Planet buttons.
function toggleStarInfo() {
    document.getElementById("star").style.display = "block";
    document.getElementById("galaxy").style.display = "none";
    document.getElementById("planet").style.display = "none";
}

//Displays Galaxy button and hides Star and Planet buttons.
function toggleGalaxyInfo() {
    document.getElementById("galaxy").style.display = "block";
    document.getElementById("star").style.display = "none";
    document.getElementById("planet").style.display = "none";
}

//Displays Planet button and hides Star and Galaxy buttons
function togglePlanetInfo() {
    document.getElementById("planet").style.display = "block";
    document.getElementById("star").style.display = "none";
    document.getElementById("galaxy").style.display = "none";

}

function toggleOStarInfo() {
  document.getElementById("star-button-o").style.display = "block";
  document.getElementById("star-button-b").style.display = "none";
  document.getElementById("star-button-a").style.display = "none";
  document.getElementById("star-button-f").style.display = "none";
  document.getElementById("star-button-g").style.display = "none";
  document.getElementById("star-button-k").style.display = "none";
}
