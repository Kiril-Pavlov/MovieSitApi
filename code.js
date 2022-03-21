// fetch https://yts.mx/api/v2/list_movies.json
let movies;
let url = 'https://yts.mx/api/v2/list_movies.json'
function getMovies(urlTemp) {
    fetch(urlTemp)
        .then(promise => {return promise.json();
        }).then(data => {
            //console.log('data?',data)
            movies = data.data.movies;
            //console.log('movies?',movies);
            showMovies();
        });
    
}


getMovies(url);
let container = document.getElementById('movies-container');
function showMovies() {
    console.log('movies vo show',movies);
    movies.forEach((movie) => {
        
        let item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
      <img src="${movie.medium_cover_image}" alt="nema">
      <div>${movie.title}</div>
      <div>${movie.rating}</div>
      <div>${movie.year}</div>
      <div>${movie.genres}</div>
    `;
        //console.log(item);
        container.appendChild(item);
    })

}

//https://yts.mx/browse-movies/batman/1080p/comedy/5/seeds/2021/es
let genre = '';
let year = 0;
//filters
const setGenre = function(){
    genre = document.getElementById('genre').value;
    console.log(genre);
    return genre;
}

const setYear = function(){
    year = document.getElementById('year').value;
    console.log(year);
    return year;
}

function searchMovies(){
    container.innerHTML='';
    genre = document.getElementById('genre').value;
    year = document.getElementById('year').value;
    //console.log(genre);
    //https://yts.mx/api/v2/list_movies.json?quality=3D
    let endpoint = `https://yts.mx/api/v2/list_movies.json?genre=${genre}&year=${year}`
    console.log(endpoint)
    getMovies(endpoint);
}


    





