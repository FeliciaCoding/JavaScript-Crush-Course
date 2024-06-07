console.log("1st Run");

const dogImageDiv = document.getElementById('dogImage');
const dogButtonDiv = document.getElementById("dogButton"); 

//Asynchronous Program : 
// .then -Promises
// stuff you have to wait for

fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(json=> {
    console.log("2nd Run");
    console.log(json.message);
    dogImageDiv.innerHTML =`<image src='${json.message}' 
    height=500 width=500/>`

})

dogButtonDiv.onclick = () => {
    console.log("Clicked the New Dog Button"); 
}

console.log("3rd Run");

/*

1st Run 
3rd Run 

2nd Run 
https://images.dog.ceo/breeds/pyrenees/n02111500_655.jpg

*/
