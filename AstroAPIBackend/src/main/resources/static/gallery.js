const planet_url = 'http://localhost:8080/planets'
const galaxy_url = 'http://localhost:8080/galaxies'
const star_url = 'http://localhost:8080/stars'

async function getStarImages() {
    const response = await fetch(star_url);
    const stardata = await response.json();
    const stardatalength = Object.keys(stardata).length
    console.log(stardatalength);
    for (let i = 0; i < stardatalength; i++) {
        let stardatafinal = stardata[i];
        let myJSONcol1 = JSON.stringify(stardatafinal, ["starImgURL"]);      
        let star_col1 = JSON.parse(myJSONcol1);
        let generatedHtmlCol1 = Object.keys(star_col1).reduce((accum, currKey) => accum +
        `<div id = ${i} class="p-2">
            <img src ="${star_col1[currKey]}" style = "border: 5px solid #555;"width= "300px" height= "300px"</img>
            </div>`, '');

            document.getElementById('starimages').innerHTML = generatedHtmlCol1;
    }
    
}

getStarImages();