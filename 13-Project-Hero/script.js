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


// getHero

    // how to connect the buttom with the function => using onlick()
function getHero(id, Name) {

    fetch (`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => { 
            console(json.image.url); 
            // show image on DOM 
            // document.getElementById("body").innerHTML += `<img src = "${json.image.url}" >`; 
            heroImageDiv.innerHTML += `<img src = "${json.image.url}" > height 200 width 200`;
        })

}


// getRandomHeroId 

const getRandomHeroId = () => {

    const totalNumHero = 231; 
    return Math.floor(Math.random()*totalNumHero +1); 

}

// Connect Buttom to functions 


newHeroButton.onclick = () => {

    getHero(getRandomHeroId()); 

}

