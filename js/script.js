const apiUrl = "https://iata-and-icao-codes.p.rapidapi.com/airlines";

const rapidApiKey = {
  headers: {
    "x-rapidapi-key": "e360b3c142msh1d6f915ac4d91e2p115aedjsn35105dc71911",
  },
};

let loader = document.querySelector(".loader");

async function getAirData() {
  const response = await fetch(apiUrl, rapidApiKey);
  const json = await response.json();
  console.log(json);

  loader.innerHTML = "";
}

getAirData();
