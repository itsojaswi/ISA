const apiKey = "ba21dd56";
const defaultUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=ba21dd56";

let movieName = document.querySelector(".name");
let releasedYear = document.querySelector(".year");
let thumbNail = document.querySelector(".image");
let container = document.querySelector(".container");
let searchBox = document.querySelector(".search-bar");
let searchButton = document.querySelector(".button");

function Search() {
  searchButton.addEventListener("click", function () {
    const movie = searchBox.value;
    if (movie) {
      fetchData(movie);
    } else {
      defaultMovie(defaultUrl);
    }
  });

  searchBox.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      console.log("working");
      const movie = searchBox.value;

      if (movie) {
        fetchData(movie);
      } else {
        defaultMovie(defaultUrl);
      }
    }
  });
}

async function defaultMovie(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const { Title, Year, Poster } = data;
  console.log(Title, Year, Poster);

  container.innerHTML = `
  <div class="card">
  <div class="description">
    <h3 class="name">Movie: ${Title}</h3>
    <p class="year"> Released year: ${Year}</p>
  </div>
  <div>
    <img class="image" src="${Poster}">
  </div>
  <button class="watch-button">Watch Now</button>
  </div>
    </div>`;

  Search();
}

async function fetchData(movie) {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${movie}&apikey=ba21dd56`
    );
    const data = await response.json();
    const result = data.Search;

    container.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
      const { Title, Year, Poster } = result[i];
      console.log(Title, Year, Poster);

      container.innerHTML += `
            <div class="card">
               <div class="description">
                  <h3 class="name"> Movie: ${Title}</h3>
                  <p class="year"> Released year: ${Year}</p>
               </div>
               <div>
                  <img class="image" src="${Poster}">
               </div>
               <div>
                  <button class="watch-button">Watch Now</button>
               </div>
            </div>
            `;
    }
  } catch {
    container.innerHTML = "movie not found";
  }
}

defaultMovie(defaultUrl);
