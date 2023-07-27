let url = "http://localhost:3000/movies";

async function getMovie(url) {
  response = await fetch(url);
  data = JSON.stringify(response);
  console.log(data);
}

getMovie(url);
