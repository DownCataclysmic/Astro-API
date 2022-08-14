const planet_url = 'http://localhost:8080/planets'

//Random number function that will produce a random number for the purposes of indexing
function getRandomInt(min, max) {
  min = Math.ceil(min); max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
/*generatedRandNumber is here to be refactored into a function that excludes the last random number
  generated from being used in the next button click */


// The following functions fetch the star data from my API and produces HTML
async function getPlanetDataTerrestrial() {
  const response = await fetch(planet_url);
  const data = await response.json();
  const rand_planet = data[getRandomInt(0,4)]
  /*Now I know what you're thinking. What on earth is this mess below this comment.
    How about we just be happy that it works :)*/

    let myJSONcol1 = JSON.stringify(rand_planet, ["planetName", "id", "planetType", "planetMass", "planetRadius", "planetTilt", "planetDistFromEarth"]);
    jsonPlanetNameCol1 = myJSONcol1.replace("\"planetName\":", "\"Planet Name\":");  jsonPlanetNameCol1 =  jsonPlanetNameCol1.replace("\"id\":", "\"Planet ID\":");
    jsonPlanetNameCol1 =  jsonPlanetNameCol1.replace("\"planetType\":", "\"Type of Planet\":"); jsonPlanetNameCol1 =  jsonPlanetNameCol1.replace("\"planetMass\":", "\"Mass\":");
    jsonPlanetNameCol1 =  jsonPlanetNameCol1.replace("\"planetRadius\":", "\"Radius\":"); jsonPlanetNameCol1 =  jsonPlanetNameCol1.replace("\"planetTilt\":", "\"Tilt\":");
    jsonPlanetNameCol1 =  jsonPlanetNameCol1.replace("\"planetDistFromEarth\":", "\"Planet Distance From Earth\":");

    let rand_planet_col1 = JSON.parse(jsonPlanetNameCol1);
  
    let myJSONcol2 = JSON.stringify(rand_planet, ["planetDescr"]);      
    let rand_planet_col2 = JSON.parse(myJSONcol2);
    
    let myJSONcol3 = JSON.stringify(rand_planet, ["planetImgUrl"]);      
    let rand_planet_col3 = JSON.parse(myJSONcol3);
    
    const generatedHtmlCol1 = Object.keys(rand_planet_col1).reduce((accum, currKey) => accum +
    `<div class="p-2">
      <h4 class="o-stars">${currKey}: ${rand_planet_col1[currKey]}</h4>
      </div>`, '');
  
            document.getElementById('container-planet-t-a').innerHTML = generatedHtmlCol1;
  
    const generatedHtmlCol2 = Object.keys(rand_planet_col2).reduce((accum, currKey) => accum +
      `<div class="p-2">
        <h6 class="o-stars">${rand_planet_col2[currKey]}</h6>
        </div>`, '');
  
    const generatedHtmlCol3 = Object.keys(rand_planet_col3).reduce((accum, currKey) => accum +
        `<div class="p-2">
          <img src ="${rand_planet_col3[currKey]}" style = "border: 5px solid #555;"width= "300px" height= "300px"</img>
          </div>`, '');
  
              document.getElementById('container-planet-t-b').innerHTML = generatedHtmlCol3 + generatedHtmlCol2;
  
  }
async function getGalaxyDataElliptical() {
    const response = await fetch(galaxy_url);
    const data = await response.json();
    const rand_galaxy = data[getRandomInt(4,8)]
    /*Now I know what you're thinking. What on earth is this mess below this comment.
      How about we just be happy that it works :)*/
  
      let myJSONcol1 = JSON.stringify(rand_galaxy, ["galaxyName", "id", "galaxyNumStars", "galaxyDist", "galaxyWidth", "galaxyBrightness"]);
      jsonGalaxyNameCol1 = myJSONcol1.replace("\"galaxyName\":", "\"Galaxy Name\":");  jsonGalaxyNameCol1 =  jsonGalaxyNameCol1.replace("\"id\":", "\"Galaxy ID\":");
      jsonGalaxyNameCol1 =  jsonGalaxyNameCol1.replace("\"galaxyNumStars\":", "\"Number of Stars\":"); jsonGalaxyNameCol1 =  jsonGalaxyNameCol1.replace("\"galaxyDist\":", "\"Galaxy Distance From Earth\":");
      jsonGalaxyNameCol1 =  jsonGalaxyNameCol1.replace("\"galaxyWidth\":", "\"Diameter\":"); jsonGalaxyNameCol1 =  jsonGalaxyNameCol1.replace("\"galaxyBrightness\":", "\"Galaxy Brightness (Apparent Magnitude)\":");
      
      let rand_galaxy_col1 = JSON.parse(jsonGalaxyNameCol1);
    
      let myJSONcol2 = JSON.stringify(rand_galaxy, ["galaxyDescr"]);      
      let rand_galaxy_col2 = JSON.parse(myJSONcol2);
      
      let myJSONcol3 = JSON.stringify(rand_galaxy, ["galaxyImgUrl"]);      
      let rand_galaxy_col3 = JSON.parse(myJSONcol3);
      
      const generatedHtmlCol1 = Object.keys(rand_galaxy_col1).reduce((accum, currKey) => accum +
      `<div class="p-2">
        <h4 class="o-stars">${currKey}: ${rand_galaxy_col1[currKey]}</h4>
        </div>`, '');
    
              document.getElementById('container-planet-se-a').innerHTML = generatedHtmlCol1;
    
      const generatedHtmlCol2 = Object.keys(rand_galaxy_col2).reduce((accum, currKey) => accum +
        `<div class="p-2">
          <h6 class="o-stars">${rand_galaxy_col2[currKey]}</h6>
          </div>`, '');
    
      const generatedHtmlCol3 = Object.keys(rand_galaxy_col3).reduce((accum, currKey) => accum +
          `<div class="p-2">
            <img src ="${rand_galaxy_col3[currKey]}" style = "border: 5px solid #555;"width= "300px" height= "300px"</img>
            </div>`, '');
    
                document.getElementById('container-planet-se-b').innerHTML = generatedHtmlCol3 + generatedHtmlCol2;
    
    }

async function getGalaxyDataPeculiar() {
    const response = await fetch(galaxy_url);
    const data = await response.json();
    const rand_galaxy = data[getRandomInt(8,12)]
    /*Now I know what you're thinking. What on earth is this mess below this comment.
      How about we just be happy that it works :)*/
  
      let myJSONcol1 = JSON.stringify(rand_galaxy, ["galaxyName", "id", "galaxyNumStars", "galaxyDist", "galaxyWidth", "galaxyBrightness"]);
      jsonGalaxyNameCol1 = myJSONcol1.replace("\"galaxyName\":", "\"Galaxy Name\":");  jsonGalaxyNameCol1 =  jsonGalaxyNameCol1.replace("\"id\":", "\"Galaxy ID\":");
      jsonGalaxyNameCol1 =  jsonGalaxyNameCol1.replace("\"galaxyNumStars\":", "\"Number of Stars\":"); jsonGalaxyNameCol1 =  jsonGalaxyNameCol1.replace("\"galaxyDist\":", "\"Galaxy Distance From Earth\":");
      jsonGalaxyNameCol1 =  jsonGalaxyNameCol1.replace("\"galaxyWidth\":", "\"Diameter\":"); jsonGalaxyNameCol1 =  jsonGalaxyNameCol1.replace("\"galaxyBrightness\":", "\"Galaxy Brightness (Apparent Magnitude)\":");
      
      let rand_galaxy_col1 = JSON.parse(jsonGalaxyNameCol1);
    
      let myJSONcol2 = JSON.stringify(rand_galaxy, ["galaxyDescr"]);      
      let rand_galaxy_col2 = JSON.parse(myJSONcol2);
      
      let myJSONcol3 = JSON.stringify(rand_galaxy, ["galaxyImgUrl"]);      
      let rand_galaxy_col3 = JSON.parse(myJSONcol3);
      
      const generatedHtmlCol1 = Object.keys(rand_galaxy_col1).reduce((accum, currKey) => accum +
      `<div class="p-2">
        <h4 class="o-stars">${currKey}: ${rand_galaxy_col1[currKey]}</h4>
        </div>`, '');
    
              document.getElementById('container-peculiara').innerHTML = generatedHtmlCol1;
    
      const generatedHtmlCol2 = Object.keys(rand_galaxy_col2).reduce((accum, currKey) => accum +
        `<div class="p-2">
          <h6 class="o-stars">${rand_galaxy_col2[currKey]}</h6>
          </div>`, '');
    
      const generatedHtmlCol3 = Object.keys(rand_galaxy_col3).reduce((accum, currKey) => accum +
          `<div class="p-2">
            <img src ="${rand_galaxy_col3[currKey]}" style = "border: 5px solid #555;"width= "300px" height= "300px"</img>
            </div>`, '');
    
                document.getElementById('container-peculiarb').innerHTML = generatedHtmlCol3 + generatedHtmlCol2;
    
    }

async function getGalaxyDataIrregular() {
    const response = await fetch(galaxy_url);
    const data = await response.json();
    const rand_galaxy = data[getRandomInt(12,15)]
    /*Now I know what you're thinking. What on earth is this mess below this comment.
      How about we just be happy that it works :)*/
  
    let myJSONcol1 = JSON.stringify(rand_galaxy, ["galaxyName", "id", "galaxyNumStars", "galaxyDist", "galaxyWidth", "galaxyBrightness"]);
    jsonGalaxyNameCol1 = myJSONcol1.replace("\"galaxyName\":", "\"Galaxy Name\":");  jsonGalaxyNameCol1 =  jsonGalaxyNameCol1.replace("\"id\":", "\"Galaxy ID\":");
    jsonGalaxyNameCol1 =  jsonGalaxyNameCol1.replace("\"galaxyNumStars\":", "\"Number of Stars\":"); jsonGalaxyNameCol1 =  jsonGalaxyNameCol1.replace("\"galaxyDist\":", "\"Galaxy Distance From Earth\":");
    jsonGalaxyNameCol1 =  jsonGalaxyNameCol1.replace("\"galaxyWidth\":", "\"Diameter\":"); jsonGalaxyNameCol1 =  jsonGalaxyNameCol1.replace("\"galaxyBrightness\":", "\"Galaxy Brightness (Apparent Magnitude)\":");
    
    let rand_galaxy_col1 = JSON.parse(jsonGalaxyNameCol1);
  
    let myJSONcol2 = JSON.stringify(rand_galaxy, ["galaxyDescr"]);      
    let rand_galaxy_col2 = JSON.parse(myJSONcol2);
    
    let myJSONcol3 = JSON.stringify(rand_galaxy, ["galaxyImgUrl"]);      
    let rand_galaxy_col3 = JSON.parse(myJSONcol3);
    
    const generatedHtmlCol1 = Object.keys(rand_galaxy_col1).reduce((accum, currKey) => accum +
    `<div class="p-2">
      <h4 class="o-stars">${currKey}: ${rand_galaxy_col1[currKey]}</h4>
      </div>`, '');
  
            document.getElementById('container-irregulara').innerHTML = generatedHtmlCol1;
  
    const generatedHtmlCol2 = Object.keys(rand_galaxy_col2).reduce((accum, currKey) => accum +
      `<div class="p-2">
        <h6 class="o-stars">${rand_galaxy_col2[currKey]}</h6>
        </div>`, '');
  
    const generatedHtmlCol3 = Object.keys(rand_galaxy_col3).reduce((accum, currKey) => accum +
        `<div class="p-2">
          <img src ="${rand_galaxy_col3[currKey]}" style = "border: 5px solid #555;"width= "300px" height= "300px"</img>
          </div>`, '');
  
              document.getElementById('container-irregularb').innerHTML = generatedHtmlCol3 + generatedHtmlCol2;
  
  }


