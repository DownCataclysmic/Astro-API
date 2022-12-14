let formstaradd = document.getElementById('formstaradd');
let formstarupdate = document.getElementById('formstarupdate');
let formstardelete = document.getElementById('formstardelete');


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
    starclassadd = document.getElementById('starclassadd');
    starnameadd = document.getElementById('starnameadd');
    starmassadd = document.getElementById('starmassadd');
    starradiusadd = document.getElementById('starradiusadd');
    starcolouradd = document.getElementById('starcolouradd');
    startempadd = document.getElementById('startempadd');
    stardistanceadd = document.getElementById('stardistanceadd');
    starbrightnessadd = document.getElementById('starbrightnessadd');
    starimageadd = document.getElementById('starimageadd');
    stardescriptionadd = document.getElementById('stardescriptionadd');

  starclassadd.innerHTML = data.starclassadd;
  starnameadd.innerHTML = data.starnameadd;
  starmassadd.innerHTML = data.starmassadd;
  starradiusadd.innerHTML = data.starradiusadd;
  starcolouradd.innerHTML = data.starcolouradd;
  startempadd.innerHTML = data.startempadd;
  stardistanceadd.innerHTML = data.stardistanceadd;
  starbrightnessadd.innerHTML = data.starbrightnessadd;
  starimageadd.innerHTML = data.starimageadd;
  stardescriptionadd.innerHTML = data.stardescriptionadd;
    
}).catch(error => console.error('Error:', error)); 
document.getElementById("staraddsuccess").innerHTML = `Star: "${starnameadd}" successfully added. `;
});

formstarupdate.addEventListener('submit', function(e){
    e.preventDefault()
   
    let staridupdate = document.getElementById('staridupdate').value;
    let starclassupdate = document.getElementById('starclassupdate').value;
    let starnameupdate = document.getElementById('starnameupdate').value;
    let starmassupdate = document.getElementById('starmassupdate').value;
    let starradiusupdate = document.getElementById('starradiusupdate').value;
    let starcolourupdate = document.getElementById('starcolourupdate').value;
    let startempupdate = document.getElementById('startempupdate').value;
    let stardistanceupdate = document.getElementById('stardistanceupdate').value;
    let starbrightnessupdate = document.getElementById('starbrightnessupdate').value;
    let starimageupdate = document.getElementById('starimageupdate').value;
    let stardescriptionupdate = document.getElementById('stardescriptionupdate').value;
   
    fetch(`http://localhost:8080/update/${staridupdate}`, {
     method: 'PUT',
     body: JSON.stringify({
       starClass:starclassupdate,
       starName:starnameupdate,
       starMass:starmassupdate,
       starRadius:starradiusupdate,
       starColour:starcolourupdate,
       starTemp:startempupdate,
       starDistFromEarth:stardistanceupdate,
       starBrightness:starbrightnessupdate,
       starImgURL:starimageupdate,
       starDescr:stardescriptionupdate,
   
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
   document.getElementById("starupdatesuccess").innerHTML = `Star with the ID: "${staridupdate}"  has been successfully updated. `;
   });

   formstardelete.addEventListener('submit', function(e){
    e.preventDefault()
   
    let stariddelete = document.getElementById('stariddelete').value;
   
    fetch(`http://localhost:8080/delete/${stariddelete}`, {
     method: 'DELETE'
     ,
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
   document.getElementById("stardeletesuccess").innerHTML = `Star with the ID: "${stariddelete}"  has been successfully deleted. `;
   });