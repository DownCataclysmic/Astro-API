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

// The following functions fetch the star data from my API and produces HTML
async function getStarDataO() {
  const response = await fetch(star_url);
  const data = await response.json();
  const rand_star = data[getRandomInt(1,5)]
  /*Now I know what you're thinking. What on earth is this mess below this comment.
    How about we just be happy that it works :)*/

  let myJSONcol1 = JSON.stringify(rand_star, ["starClass", "id", "starName", "starName", "starRadius", "starColour", "starTemp","starDistFromEarth" ,"starBrightness" ]);
  jsonStarNameCol1 = myJSONcol1.replace("\"starClass\":", "\"Star Classification\":"); jsonStarNameCol1 = jsonStarNameCol1.replace("\"id\":", "\"Star ID\":");
  jsonStarNameCol1 = jsonStarNameCol1.replace("\"starName\":", "\"Star Name\":");jjsonStarNameCol1 = jsonStarNameCol1.replace("\"starMass\":", "\"Star Mass (M☉)\":");
  jsonStarNameCol1 = jsonStarNameCol1.replace("\"starRadius\":", "\"Star Radius (R☉)\":");jsonStarNameCol1 = jsonStarNameCol1.replace("\"starColour\":", "\"Star Colour\":");
  jsonStarNameCol1 = jsonStarNameCol1.replace("\"starTemp\":", "\"Star Temperature (K)\":");jsonStarNameCol1 = jsonStarNameCol1.replace("\"starDistFromEarth\":", "\"Star Distance From Earth (Parsecs)\":");  
  jsonStarNameCol1 = jsonStarNameCol1.replace("\"starBrightness\":", "\"Star Brightness (Apparent Magnitude)\":");
  let rand_star_col1 = JSON.parse(jsonStarNameCol1);

  let myJSONcol2 = JSON.stringify(rand_star, ["starDescr"]);      
  let rand_star_col2 = JSON.parse(myJSONcol2);
  
  let myJSONcol3 = JSON.stringify(rand_star, ["starImgURL"]);      
  let rand_star_col3 = JSON.parse(myJSONcol3);
  
  const generatedHtmlCol1 = Object.keys(rand_star_col1).reduce((accum, currKey) => accum +
  `<div class="p-2">
    <h4 class="o-stars">${currKey}: ${rand_star_col1[currKey]}</h4>
    </div>`, '');

          document.getElementById('container-oa').innerHTML = generatedHtmlCol1;

  const generatedHtmlCol2 = Object.keys(rand_star_col2).reduce((accum, currKey) => accum +
    `<div class="p-2">
      <h5 class="o-stars">${rand_star_col2[currKey]}</h5>
      </div>`, '');

  const generatedHtmlCol3 = Object.keys(rand_star_col3).reduce((accum, currKey) => accum +
      `<div class="p-2">
        <img src ="${rand_star_col3[currKey]}" width= "300px" height= "300px"</img>
        </div>`, '');

            document.getElementById('container-ob').innerHTML = generatedHtmlCol2 + generatedHtmlCol3;

}
async function getStarDataB() {
  const response = await fetch(star_url);
  const data = await response.json();
  const rand_star = data[getRandomInt(5,10)]
  const myJSON = JSON.stringify(rand_star);
  jsonStarName = myJSON.replace("\"starClass\":", "\"Star Classification\":");
  jsonStarName = jsonStarName.replace("\"id\":", "\"Star ID\":");
  jsonStarName = jsonStarName.replace("\"starName\":", "\"Star Name\":");
  jsonStarName = jsonStarName.replace("\"starMass\":", "\"Star Mass (M)\":");
  jsonStarName = jsonStarName.replace("\"starRadius\":", "\"Star Radius (R☉)\":");
  jsonStarName = jsonStarName.replace("\"starColour\":", "\"Star Colour\":");
  jsonStarName = jsonStarName.replace("\"starTemp\":", "\"Star Temperature (K)\":");
  jsonStarName = jsonStarName.replace("\"starDistFromEarth\":", "\"Star Distance From Earth (Parsecs)\":");
  jsonStarName = jsonStarName.replace("\"starBrightness\":", "\"Star Brightness (Apparent Magnitude)\":");
  
  let rand_star_fixed = JSON.parse(jsonStarName);
  const generatedHtml = Object.keys(rand_star_fixed).reduce((accum, currKey) => accum +
  `<div class="p-2">
    <h3 class="b-stars">${currKey}: ${rand_star_fixed[currKey]}</h3>
    </div>`, '');


          document.getElementById('container-b').innerHTML = generatedHtml;
        }

async function getStarDataA() {
  const response = await fetch(star_url);
  const data = await response.json();
  const rand_star = data[getRandomInt(10,15)]
  const myJSON = JSON.stringify(rand_star);
  jsonStarName = myJSON.replace("\"starClass\":", "\"Star Classification\":");
  jsonStarName = jsonStarName.replace("\"id\":", "\"Star ID\":");
  jsonStarName = jsonStarName.replace("\"starName\":", "\"Star Name\":");
  jsonStarName = jsonStarName.replace("\"starMass\":", "\"Star Mass (M☉)\":");
  jsonStarName = jsonStarName.replace("\"starRadius\":", "\"Star Radius (R☉)\":");
  jsonStarName = jsonStarName.replace("\"starColour\":", "\"Star Colour\":");
  jsonStarName = jsonStarName.replace("\"starTemp\":", "\"Star Temperature (K)\":");
  jsonStarName = jsonStarName.replace("\"starDistFromEarth\":", "\"Star Distance From Earth (Parsecs)\":");
  jsonStarName = jsonStarName.replace("\"starBrightness\":", "\"Star Brightness (Apparent Magnitude)\":");

  let rand_star_fixed = JSON.parse(jsonStarName);
  const generatedHtml = Object.keys(rand_star_fixed).reduce((accum, currKey) => accum +
  `<div class="p-2">
    <h3 class="a-stars">${currKey}: ${rand_star_fixed[currKey]}</h3>
    </div>`, '');

          document.getElementById('container-a').innerHTML = generatedHtml;
        }

async function getStarDataF() {
  const response = await fetch(star_url);
  const data = await response.json();
  const rand_star = data[getRandomInt(15,20)]
  const myJSON = JSON.stringify(rand_star);
  jsonStarName = myJSON.replace("\"starClass\":", "\"Star Classification\":");
  jsonStarName = jsonStarName.replace("\"id\":", "\"Star ID\":");
  jsonStarName = jsonStarName.replace("\"starName\":", "\"Star Name\":");
  jsonStarName = jsonStarName.replace("\"starMass\":", "\"Star Mass (M☉)\":");
  jsonStarName = jsonStarName.replace("\"starRadius\":", "\"Star Radius (R☉)\":");
  jsonStarName = jsonStarName.replace("\"starColour\":", "\"Star Colour\":");
  jsonStarName = jsonStarName.replace("\"starTemp\":", "\"Star Temperature (K)\":");
  jsonStarName = jsonStarName.replace("\"starDistFromEarth\":", "\"Star Distance From Earth (Parsecs)\":");
  jsonStarName = jsonStarName.replace("\"starBrightness\":", "\"Star Brightness (Apparent Magnitude)\":");

  let rand_star_fixed = JSON.parse(jsonStarName);
  const generatedHtml = Object.keys(rand_star_fixed).reduce((accum, currKey) => accum +
  `<div class="p-2">
    <h3 class="f-stars">${currKey}: ${rand_star_fixed[currKey]}</h3>
    </div>`, '');

          document.getElementById('container-f').innerHTML = generatedHtml;
        }

async function getStarDataG() {
  const response = await fetch(star_url);
  const data = await response.json();
  const rand_star = data[getRandomInt(20,25)]
  const myJSON = JSON.stringify(rand_star);
  jsonStarName = myJSON.replace("\"starClass\":", "\"Star Classification\":");
  jsonStarName = jsonStarName.replace("\"id\":", "\"Star ID\":");
  jsonStarName = jsonStarName.replace("\"starName\":", "\"Star Name\":");
  jsonStarName = jsonStarName.replace("\"starMass\":", "\"Star Mass (M☉)\":");
  jsonStarName = jsonStarName.replace("\"starRadius\":", "\"Star Radius (R☉)\":");
  jsonStarName = jsonStarName.replace("\"starColour\":", "\"Star Colour\":");
  jsonStarName = jsonStarName.replace("\"starTemp\":", "\"Star Temperature (K)\":");
  jsonStarName = jsonStarName.replace("\"starDistFromEarth\":", "\"Star Distance From Earth (Parsecs)\":");
  jsonStarName = jsonStarName.replace("\"starBrightness\":", "\"Star Brightness (Apparent Magnitude)\":");

  let rand_star_fixed = JSON.parse(jsonStarName);
  const generatedHtml = Object.keys(rand_star_fixed).reduce((accum, currKey) => accum +
  `<div class="p-2">
    <h3 class="g-stars">${currKey}: ${rand_star_fixed[currKey]}</h3>
    </div>`, '');

          document.getElementById('container-g').innerHTML = generatedHtml;
        }

async function getStarDataK() {
  const response = await fetch(star_url);
  const data = await response.json();
  const rand_star = data[getRandomInt(25,30)]
  const myJSON = JSON.stringify(rand_star);
  jsonStarName = myJSON.replace("\"starClass\":", "\"Star Classification\":");
  jsonStarName = jsonStarName.replace("\"id\":", "\"Star ID\":");
  jsonStarName = jsonStarName.replace("\"starName\":", "\"Star Name\":");
  jsonStarName = jsonStarName.replace("\"starMass\":", "\"Star Mass (M☉)\":");
  jsonStarName = jsonStarName.replace("\"starRadius\":", "\"Star Radius (R☉)\":");
  jsonStarName = jsonStarName.replace("\"starColour\":", "\"Star Colour\":");
  jsonStarName = jsonStarName.replace("\"starTemp\":", "\"Star Temperature (K)\":");
  jsonStarName = jsonStarName.replace("\"starDistFromEarth\":", "\"Star Distance From Earth (Parsecs)\":");
  jsonStarName = jsonStarName.replace("\"starBrightness\":", "\"Star Brightness (Apparent Magnitude)\":");

  let rand_star_fixed = JSON.parse(jsonStarName);
  const generatedHtml = Object.keys(rand_star_fixed).reduce((accum, currKey) => accum +
  `<div class="p-2">
    <h3 class="k-stars">${currKey}: ${rand_star_fixed[currKey]}</h3>
    </div>`, '');

          document.getElementById('container-k').innerHTML = generatedHtml;
        }