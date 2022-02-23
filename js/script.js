const apiUrl = "https://data-imdb1.p.rapidapi.com/movie/byYear/1983/";

const rapidApiKey = {
  headers: {
    "x-rapidapi-key": "e360b3c142msh1d6f915ac4d91e2p115aedjsn35105dc71911",
  },
};

let loader = document.querySelector(".loader");

async function getMovieData() {
  const response = await fetch(apiUrl, rapidApiKey);
  const json = await response.json();
  console.log(json.results);
  const getMovie = json.results
  
  for(let i = 0; getMovie.length > i; i++) {
    
  }


  loader.innerHTML = "";


}

getMovieData();
