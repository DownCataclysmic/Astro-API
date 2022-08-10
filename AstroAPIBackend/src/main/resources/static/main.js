
  function toggleStarSize() {
    var text = document.getElementById("star-size");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

function toggleStarInfo() {
    document.getElementById("star").style.display = "block";
    document.getElementById("galaxy").style.display = "none";
    document.getElementById("planet").style.display = "none";
}
function toggleGalaxyInfo() {
    document.getElementById("galaxy").style.display = "block";
    document.getElementById("star").style.display = "none";
    document.getElementById("planet").style.display = "none";
}
function togglePlanetInfo() {
    document.getElementById("planet").style.display = "block";
    document.getElementById("star").style.display = "none";
    document.getElementById("galaxy").style.display = "none";

}
