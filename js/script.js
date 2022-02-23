const apiUrl = "https://data-imdb1.p.rapidapi.com/movie/byYear/1983/";

const rapidApiKey = {
  headers: {
    "x-rapidapi-key": "e360b3c142msh1d6f915ac4d91e2p115aedjsn35105dc71911",
  },
};

let loader = document.querySelector(".loader");
const resultsCard = document.querySelector("#resultsCard")

async function getMovieData() {
  const response = await fetch(apiUrl, rapidApiKey);
  const json = await response.json();
  console.log(json.results);
  const getMovie = json.results;

  loader.innerHTML = "";
  

  for (let i = 0; i < getMovie.length; i++) {
    if (i === 20){
      break; 
    } 
    resultsCard.innerHTML += `<div class="result"><a href="details.html">${getMovie[i].title}</a></div>`;
  }

  
  

}

getMovieData();
