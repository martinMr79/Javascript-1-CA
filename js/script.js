const apiUrl = "https://finalspaceapi.com/api/v0/character";

let loader = document.querySelector(".loader");
const resultsCard = document.querySelector(".resultsCard");

async function getMovieData() {
  try {
    const response = await fetch(apiUrl);
    const getMovie = await response.json();
    console.log(getMovie);

    loader.innerHTML = "";

    for (let i = 0; i < getMovie.length; i++) {
      resultsCard.innerHTML += `<a href="details.html?id=${getMovie[i].id}" class="card">
    <h2>${getMovie[i].name}</h2>
    <div class="result image" style="background-image: url(${getMovie[i].img_url});"></div>
    <div class="result">
    <ul>
    <li>Origin: ${getMovie[i].origin}</li>
    <li>Species: ${getMovie[i].species}</li>
    </ul></div>
    </a>`;
    }
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

getMovieData();

function message(messageType = "success", message = "") {
  return `<div class ="alert ${messageType}">${message}</div>`;
}
