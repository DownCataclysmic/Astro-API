
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

function toggleOStarInfo() {
  document.getElementById("star-button-o").style.display = "block";
  document.getElementById("star-button-b").style.display = "none";
  document.getElementById("star-button-a").style.display = "none";
  document.getElementById("star-button-f").style.display = "none";
  document.getElementById("star-button-g").style.display = "none";
  document.getElementById("star-button-k").style.display = "none";
}

const star_url = 'http://localhost:8080/stars'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

async function getStarDataO() {
  const response = await fetch(star_url);
  const data = await response.json();
  const rand_star = data[getRandomInt(1,5)]
  const generatedHtml = Object.keys(rand_star).reduce((accum, currKey) => accum +
  `<div class="p-2">
    <h3 class="o-stars">${currKey}</h3>
    <h5 class="star-descriptions">${rand_star[currKey]}</h5>
    </div>`, '');

          document.getElementById('container-o').innerHTML = generatedHtml;
        }

async function getStarDataB() {
  const response = await fetch(star_url);
  const data = await response.json();
  const rand_star = data[getRandomInt(5,10)]
  const generatedHtml = Object.keys(rand_star).reduce((accum, currKey) => accum +
  `<div class="grocery_item">
    <div class="item">${currKey}</div>
    <div class="price">${rand_star[currKey]}</div>
    </div>`, '');

          document.getElementById('container-b').innerHTML = generatedHtml;
        }

async function getStarDataA() {
  const response = await fetch(star_url);
  const data = await response.json();
  const rand_star = data[getRandomInt(10,15)]
  const generatedHtml = Object.keys(rand_star).reduce((accum, currKey) => accum +
  `<div class="grocery_item">
    <div class="item">${currKey}</div>
    <div class="price">${rand_star[currKey]}</div>
    </div>`, '');

          document.getElementById('container-a').innerHTML = generatedHtml;
        }