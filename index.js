
const inputName = document.getElementById('inputName');
const snackbar = document.getElementById('snackbar');
const results = document.getElementById('results');

// SuperHero Name Input
inputName.onkeyup = function () {
    var name = inputName.value;

    if (name !== '') {
        fetch('https://akabab.github.io/superhero-api/api/all.json/search/' + name.trim())
            .then(response => response.json())
            .then(data => {
                createCard(data)
            })
            .catch(err => console.log(err));
    }
}

function createCard(data) {
    if (data.response === 'error') {
        results.innerHTML = '<div style="margin-top:50px; color:white;">No Results Found! Please try a different name!</div>';
    }

    else {

        results.innerHTML = null;

        
        for (let i = 0; i < data.results.length && i < 10; i++) {

     
            var card = document.createElement('div');
            var cardImage = document.createElement('img');
            var cardContainer = document.createElement('div');
            var cardText = document.createElement('div');
            var detailsButton = document.createElement('div');

            card.classList.add('result-card');
            cardImage.classList.add('result-card-image');
            cardContainer.classList.add('result-card-container');
            detailsButton.classList.add('detailsButton');

           
            cardText.innerHTML = data.results[i].name;
            cardContainer.appendChild(cardText);

            
            cardImage.src = data.results[i].image.url;
            card.appendChild(cardImage);

           
            detailsButton.innerHTML = 'details my superpowers ';
            cardContainer.appendChild(detailsButton);

            
           
            
    }
}

results.onclick = function (event) {
    var id = event.target.getAttribute('superheroId');
    var div = event.target.getAttribute('divType');

    }
   
    



}