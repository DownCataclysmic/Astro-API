let formgalaxyadd = document.getElementById('formgalaxyadd');
let formgalaxyupdate = document.getElementById('formgalaxyupdate');
let formgalaxydelete = document.getElementById('formgalaxydelete');


formgalaxyadd.addEventListener('submit', function(e){
 e.preventDefault()

 let galaxynameadd = document.getElementById('galaxynameadd').value;
 let galaxytypeadd = document.getElementById('galaxytypeadd').value;
 let galaxynumstarsadd = document.getElementById('galaxynumstarsadd').value;
 let galaxydistanceadd = document.getElementById('galaxydistanceadd').value;
 let galaxywidthadd = document.getElementById('galaxywidthadd').value;
 let galaxybrightnessadd = document.getElementById('galaxybrightnessadd').value;
 let galaxyimageadd = document.getElementById('stardistanceadd').value;
 let galaxydescriptionadd = document.getElementById('galaxydescriptionadd').value;

 fetch('http://localhost:8080/savegalaxy', {
  method: 'POST',
  body: JSON.stringify({
    galaxyName:galaxynameadd,
    galaxyType:galaxytypeadd,
    galaxyNumStars:galaxynumstarsadd,
    galaxyDist:galaxydistanceadd,
    galaxyWidth:galaxywidthadd,
    galaxyBrightness:galaxybrightnessadd,
    galaxyImgUrl:galaxyimageadd,
    galaxyDescr:galaxydescriptionadd,

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
   });