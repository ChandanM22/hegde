const name = document.getElementById('superhero-name');
const image = document.getElementById('superhero-img');
const fav = document.getElementById('favourite');
const snackbar = document.getElementById('snackbar');


const params = new URLSearchParams(window.location.search);
var id = params.get('id');




//Fetching Superhero details from Superhero API
fetch(`https://akabab.github.io/superhero-api/api/all.json`)
    .then(res => res.json())
    .then(data => showDetails(data))
    .catch(err => console.log(err));



function showDetails(data) {

  
    name.innerHTML = data.name;


    image.src = data.image.url;
    image.alt = "Image not found";

   
    

    for (var i in data.powerstats) {
        document.getElementById(i).innerHTML = data.powerstats[i] + "%";
        //Power Meter Style Setting
        document.getElementById(i).style.width = data.powerstats[i] + "%"
    }

    
    for (var i in data.appearance) {
        document.getElementById(i).innerHTML = data.appearance[i];
    }

    for (var i in data.biography) {
        document.getElementById(i).innerHTML = data.biography[i];
    }

    for (var i in data.work) {
        document.getElementById(i).innerHTML = data.work[i];
    }

  
    for (var i in data.connections) {
        document.getElementById(i).innerHTML = data.connections[i];
    }
}


   

    
    snackbar.classList.add('visible');

    if (value) {
        snackbar.innerHTML = "Added to Favourites";
    }
    else {
        snackbar.innerHTML = "Removed from Favourites";
    }
    
    setTimeout(function () { snackbar.classList.remove("visible"); }, 3000);
