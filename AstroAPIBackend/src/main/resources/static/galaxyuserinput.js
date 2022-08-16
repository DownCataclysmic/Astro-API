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

formgalaxyupdate.addEventListener('submit', function(e){
    e.preventDefault()
   
    let galaxyidupdate = document.getElementById('galaxyidupdate').value;
    let galaxynameupdate = document.getElementById('galaxynameupdate').value;
    let galaxytypeupdate = document.getElementById('galaxytypeupdate').value;
    let galaxynumstarsupdate = document.getElementById('galaxynumstarsupdate').value;
    let galaxydistanceupdate = document.getElementById('galaxydistanceupdate').value;
    let galaxywidthupdate = document.getElementById('galaxywidthupdate').value;
    let galaxybrightnessupdate = document.getElementById('galaxybrightnessupdate').value;
    let galaxyimageupdate = document.getElementById('galaxydistanceupdate').value;
    let galaxydescriptionupdate = document.getElementById('galaxydescriptionupdate').value;
   
    fetch(`http://localhost:8080/updategalaxies/${galaxyidupdate}`, {
     method: 'PUT',
     body: JSON.stringify({
        galaxyName:galaxynameupdate,
        galaxyType:galaxytypeupdate,
        galaxyNumStars:galaxynumstarsupdate,
        galaxyDist:galaxydistanceupdate,
        galaxyWidth:galaxywidthupdate,
        galaxyBrightness:galaxybrightnessupdate,
        galaxyImgUrl:galaxyimageupdate,
        galaxyDescr:galaxydescriptionupdate,
   
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

   formgalaxydelete.addEventListener('submit', function(e){
    e.preventDefault()
   
    let galaxyiddelete = document.getElementById('galaxyiddelete').value;
   
    fetch(`http://localhost:8080/delete/${galaxyiddelete}`, {
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