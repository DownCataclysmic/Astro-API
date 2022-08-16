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

 let planetidupdate = document.getElementById('planetidupdate').value;
 let planetnameupdate = document.getElementById('planetnameupdate').value;
 let planettypeupdate = document.getElementById('planettypeupdate').value;
 let planetmassupdate = document.getElementById('planetmassupdate').value;
 let planetradiusupdate = document.getElementById('planetradiusupdate').value;
 let planettiltupdate = document.getElementById('planettiltupdate').value;
 let planetdistanceupdate = document.getElementById('planetdistanceupdate').value;
 let planetdescriptionupdate = document.getElementById('planetdescriptionupdate').value;
 let planetimageupdate = document.getElementById('planetimageupdate').value;
   
    fetch(`http://localhost:8080/updateplanets/${planetidupdate}`, {
     method: 'PUT',
     body: JSON.stringify({
        planetName:planetnameupdate,
        planetType:planettypeupdate,
        planetMass:planetmassupdate,
        planetRadius:planetradiusupdate,
        planetTilt:planettiltupdate,
        planetDistFromEarth:planetdistanceupdate,
        planetDescr:planetdescriptionupdate,
        planetImgUrl:planetimageupdate,
   
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
   
    let planetiddelete = document.getElementById('planetiddelete').value;
   
    fetch(`http://localhost:8080/deleteplanets/${planetiddelete}`, {
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