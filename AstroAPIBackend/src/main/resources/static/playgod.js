let formstaradd = document.getElementById('formstaradd')

formstaradd.addEventListener('submit', function(e){
 e.preventDefault()

 let starclassadd = document.getElementById('starclassadd').value;
 let starnameadd = document.getElementById('starnameadd').value;
 let starmassadd = document.getElementById('starmassadd').value;
 let starradiusadd = document.getElementById('starradiusadd').value;
let starcolouradd = document.getElementById('starcolouradd').value;
let startempadd = document.getElementById('startempadd').value;
let stardistanceadd = document.getElementById('stardistanceadd').value;
let starbrightnessadd = document.getElementById('starbrightnessadd').value;
let starimageadd = document.getElementById('starimageadd').value;
let stardescriptionadd = document.getElementById('stardescriptionadd').value;

 fetch('http://localhost:8080/save', {
  method: 'POST',
  body: JSON.stringify({
    starClass:starclassadd,
    starName:starnameadd,
    starMass:starmassadd,
    starRadius:starradiusadd,
    starColour:starcolouradd,
    starTemp:startempadd,
    starDistFromEarth:stardistanceadd,
    starBrightness:starbrightnessadd,
    starImgURL:starimageadd,
    starDescr:stardescriptionadd,

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then(function(response){ 
  return response.json()})
  .then(function(data)
  {console.log(data)
  title=document.getElementById("title")
  body=document.getElementById("bd")
  title.innerHTML = data.title
  body.innerHTML = data.body  
}).catch(error => console.error('Error:', error)); 
});