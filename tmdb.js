async function getNowPlayingMovies() {
    const response = await fetch("http://127.0.0.1:3000/api/now_playing");
    const data = await response.json();
    return data.results;
}

function displayMovies(movies) {
    const moviesList = document.getElementById('movies-list');
    movies.forEach(movie => {
        const movieItem = document.createElement('li');
        const posterURL = document.createElement('img');
        const movieTitle = document.createElement('h4');

        posterURL.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieTitle.textContent = movie.title;
        movieItem.classList.add('movie-item');
        moviesList.appendChild(movieItem);
        movieItem.appendChild(posterURL);
        movieItem.appendChild(movieTitle);
    });
}

getNowPlayingMovies().then(displayMovies);