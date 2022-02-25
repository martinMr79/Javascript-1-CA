
const detailContainer = document.querySelector(".movie-details")
const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 

const id = params.get("imdb_id")

console.log(id)


const urlId = "https://data-imdb1.p.rapidapi.com/movie/byYear/1983/" 

const rapidApiKey = {
    headers: {
      "x-rapidapi-key": "e360b3c142msh1d6f915ac4d91e2p115aedjsn35105dc71911",
    },
  };



async function getMovieData() {

    try {

    const response = await fetch(urlId, rapidApiKey);
    const json = await response.json();
    console.log(json.results);
    const getMovieDetails = json.results;
        
        
}

catch(error) { 
    console.log(error); 
    detailContainer.innerHTML = message("error", error); 
}


}

getMovieData()

function message(messageType = "success", message = "error") {
    return `<div class ="alert ${messageType}">${message}</div>`; 
}


function createHTML(movieDetails) {
    detailContainer.innerHTML = `<h1>${movieDetails.imdb_id}</h1>`
}  