// https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = '10223569763528853'; 
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const RANDOM_HERO_BUTTON = document.getElementById("randomHeroButton"); 
const HERO_IMAGE_DIV = document.getElementById("heroImage"); 
const SEARCH_BUTTON = document.getElementById("search"); 
const SEARCH_INPUT = document.getElementById("searchInput");

// Define and Fetch 

// fetch (`BASE_URL/${id}`)
//     .then(response => response.json())
//     .then(json => { 
//         console(json.image.url);
//     })

// search by id : BASE_URL/id 👉 json.image.url
// search by name : BASE_URL/search/name 👉 json.result[0].image.url


function getHero(id) {

    fetch (`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {  
            //console.log(json);
            const LINK_FROM_ID = json.image.url;
            // show image on DOM 
            // document.getElementById("body").innerHTML += `<img src = "${json.image.url}" >`; 
            HERO_IMAGE_DIV.innerHTML = `<img src = "${LINK_FROM_ID}" height="300" width="300" >`;
        })
        
        .catch(error => console.error('Error fetching the hero:', error));
};

function getHeroByName(name) {

    fetch (`${BASE_URL}/search/${name}`)
        .then (response => response.json())
        .then ( json => {
            const hero = json.results[0];
            const LINK_FROM_NAME= hero.image.url;
            console.log(LINK_FROM_NAME);
            HERO_IMAGE_DIV.innerHTML = `<img src = "${LINK_FROM_NAME}" height="300" width="300" >`;
        })
};


const getRandomHeroId = () => {

    const TOTAL_NUM_HERO = 731; 
    return Math.floor(Math.random()*TOTAL_NUM_HERO +1); 

};


RANDOM_HERO_BUTTON.onclick = () => {
    console.log("Clicked randomHeroButton"); 

    getHero(getRandomHeroId()); 

}


SEARCH_BUTTON.onclick = () => {

    console.log("Clicked searchButton"); 
    console.log(SEARCH_INPUT.value)

    getHeroByName(SEARCH_INPUT.value);

}

