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

const star_url = 'http://localhost:8080/stars'

//Random number function that will produce a random number for the purposes of indexing
function getRandomInt(min, max) {
  min = Math.ceil(min); max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
/*generatedRandNumber is here to be refactored into a function that excludes the last random number
  generated from being used in the next button click */
let generatedRandNumber = [];

async function getStarDataO() {
  const response = await fetch(star_url);
  const data = await response.json();
  const rand_star = data[getRandomInt(1,5)]
  const generatedHtml = Object.keys(rand_star).reduce((accum, currKey) => accum +
  `<div class="p-2">
    <h3 class="o-stars">${currKey}: ${rand_star[currKey]}</h3>
    </div>`, '');

          document.getElementById('container-o').innerHTML = generatedHtml;
        }

async function getStarDataB() {
  const response = await fetch(star_url);
  const data = await response.json();
  const rand_star = data[getRandomInt(5,10)]
  const generatedHtml = Object.keys(rand_star).reduce((accum, currKey) => accum +
  `<div class="p-2">
    <h3 class="b-stars">${currKey}: ${rand_star[currKey]}</h3>
    </div>`, '');

          document.getElementById('container-b').innerHTML = generatedHtml;
        }

async function getStarDataA() {
  const response = await fetch(star_url);
  const data = await response.json();
  const rand_star = data[getRandomInt(10,15)]
  const generatedHtml = Object.keys(rand_star).reduce((accum, currKey) => accum +
  `<div class="p-2">
    <h3 class="a-stars">${currKey}: ${rand_star[currKey]}</h3>
    </div>`, '');

          document.getElementById('container-a').innerHTML = generatedHtml;
        }

async function getStarDataF() {
  const response = await fetch(star_url);
  const data = await response.json();
  const rand_star = data[getRandomInt(15,20)]
  const generatedHtml = Object.keys(rand_star).reduce((accum, currKey) => accum +
  `<div class="p-2">
    <h3 class="f-stars">${currKey}: ${rand_star[currKey]}</h3>
    </div>`, '');

          document.getElementById('container-f').innerHTML = generatedHtml;
        }

async function getStarDataG() {
  const response = await fetch(star_url);
  const data = await response.json();
  const rand_star = data[getRandomInt(20,25)]
  const generatedHtml = Object.keys(rand_star).reduce((accum, currKey) => accum +
  `<div class="p-2">
    <h3 class="g-stars">${currKey}: ${rand_star[currKey]}</h3>
    </div>`, '');

          document.getElementById('container-g').innerHTML = generatedHtml;
        }

async function getStarDataK() {
  const response = await fetch(star_url);
  const data = await response.json();
  const rand_star = data[getRandomInt(25,30)]
  const generatedHtml = Object.keys(rand_star).reduce((accum, currKey) => accum +
  `<div class="p-2">
    <h3 class="k-stars">${currKey}: ${rand_star[currKey]}</h3>
    </div>`, '');

          document.getElementById('container-k').innerHTML = generatedHtml;
        }