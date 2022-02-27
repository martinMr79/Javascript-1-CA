const detailContainer = document.querySelector(".character-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let loader = document.querySelector(".loader");
const id = params.get("id");

console.log(id);

const url = "https://finalspaceapi.com/api/v0/character/" + id;

console.log(url);

async function getMovieData() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    const getMovieDetails = json;
    loader.innerHTML = "";
    createHTML(getMovieDetails);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

getMovieData();

function message(messageType = "success", message = "error") {
  return `<div class ="alert ${messageType}">${message}</div>`;
}

function createHTML(movieDetails) {
  detailContainer.innerHTML = `<h1>${movieDetails.name}</h1><div class="details-card">
    <div class="result details-image" style="background-image: url(${movieDetails.img_url});"></div>
    <div class="result">
    <title>${movieDetails.name}</title>
    <ul>  
    <li>Gender: ${movieDetails.gender}</li>
    <li>Origin: ${movieDetails.origin}</li>
    <li>Species: ${movieDetails.species}</li>
    <li>Abilities: ${movieDetails.abilities[0]}</li>
    <li>Status: ${movieDetails.status}</li>
    </ul></div></div>`;
}
