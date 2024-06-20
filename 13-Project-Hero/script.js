// https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = '10223569763528853'; 
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

let newHeroButton = document.getElementById("newHeroButton"); 
let heroImageDiv = document.getElementById("heroImage"); 

// Define and Fetch 

// fetch (`BASE_URL/${id}`)
//     .then(response => response.json())
//     .then(json => { 
//         console(json.image.url)
//     })


function getHero(id) {

    fetch (`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {  
            console.log(json)

            // show image on DOM 
            // document.getElementById("body").innerHTML += `<img src = "${json.image.url}" >`; 
            heroImageDiv.innerHTML += `<img src = "${json.image.url}" height="100" width="100" >`;
        })
        
        .catch(error => console.error('Error fetching the hero:', error));
};




const getRandomHeroId = () => {

    const totalNumHero = 731; 
    return Math.floor(Math.random()*totalNumHero +1); 

}



newHeroButton.onclick = () => {
    console.log("Clicked it"); 

    getHero(getRandomHeroId()); 

}
