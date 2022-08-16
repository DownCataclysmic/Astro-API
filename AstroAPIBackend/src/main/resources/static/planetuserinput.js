let formplanetadd = document.getElementById('formplanetadd');
let formplanetupdate = document.getElementById('formplanetupdate');
let formplanetdelete = document.getElementById('formplanetdelete');


formplanetadd.addEventListener('submit', function(e){
 e.preventDefault()

 let planetnameadd = document.getElementById('planetnameadd').value;
 let planettypeadd = document.getElementById('planettypeadd').value;
 let planetmassadd = document.getElementById('planetmassadd').value;
 let planetradiusadd = document.getElementById('planetradiusadd').value;
 let planettiltadd = document.getElementById('planettiltadd').value;
 let planetdistanceadd = document.getElementById('planetdistanceadd').value;
 let planetdescriptionadd = document.getElementById('planetdescriptionadd').value;
 let planetimageadd = document.getElementById('planetimageadd').value;

 fetch('http://localhost:8080/saveplanet', {
  method: 'POST',
  body: JSON.stringify({
    planetName:planetnameadd,
    planetType:planettypeadd,
    planetMass:planetmassadd,
    planetRadius:planetradiusadd,
    planetTilt:planettiltadd,
    planetDistFromEarth:planetdistanceadd,
    planetDescr:planetdescriptionadd,
    planetImgUrl:planetimageadd,

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

formplanetupdate.addEventListener('submit', function(e){
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
   
    fetch(`http://localhost:8080/updateplanets/${galaxyidupdate}`, {
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

   formplanetdelete.addEventListener('submit', function(e){
    e.preventDefault()
   
    let galaxyiddelete = document.getElementById('galaxyiddelete').value;
   
    fetch(`http://localhost:8080/deleteplanets/${galaxyiddelete}`, {
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