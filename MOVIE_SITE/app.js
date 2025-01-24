'use strict';
import { api_key, idToCategoryMovie, idToCategoryTV, idToCategoryColorMovie, top_movies, current_movies, upcoming_movies, tv_shows } from "./config.js";

// const api = `https://api.themoviedb.org/3/movie/11?api_key=${api_key}`
const api = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1`

// elements
const topPosters = document.querySelectorAll(".top-poster");
const topMoviePoster = document.querySelectorAll(".top_poster");
const currentMoviePoster = document.querySelectorAll(".current_poster");
const upcomingMoviePoster = document.querySelectorAll(".upcoming_poster");
const tvPoster = document.querySelectorAll(".tv_poster");
const topLinks = document.querySelector(".top_link");
const currentLinks = document.querySelector(".current_link");
const upcomingLinks = document.querySelector(".upcomingLinks");
const tvLinks = document.querySelector(".tv_links");

let top_index =  Math.floor(Math.random() * 14);

// helper function
function getImageUrl(imagePath) {
    const baseUrl = "https://image.tmdb.org/t/p/w500"; // You can adjust the size (w500, w300, etc.)
    return baseUrl + imagePath;
}


// ADDING MOVIES TO THE TOP 4 Posters
topPosters.forEach(topPoster => {
    const movie_request = fetch(api);
    movie_request.then(movie_data => {
        const movie_json = movie_data.json();
        movie_json.then(about_movie_data => {
            const movieName = topPoster.querySelector(".movie-name");
            const movieGenre = topPoster.querySelector(".movie_genre");
            const movieRating = topPoster.querySelector(".movie-rating");
            const about_movie_array = about_movie_data.results;
            const about_movie = about_movie_array[top_index];
            const posterPath = getImageUrl(about_movie.poster_path);
            topPoster.style.backgroundImage = `url(${posterPath})`;
            movieName.textContent = about_movie.original_title.split(":")[0];
            movieGenre.textContent = idToCategoryMovie.get(about_movie.genre_ids[0]);
            movieGenre.style.backgroundColor = idToCategoryColorMovie.get(about_movie.genre_ids[0]);
            movieRating.textContent = about_movie.vote_average;
            top_index+=1;
        })
    })
})

// MIDDLE MOVIE SECTION
const showMiddleMovies = (categoryPosters, apiKey) => {
    let middle_index = Math.floor(Math.random() * 14);
    categoryPosters.forEach(async (category_poster) => {
        const movie_data = await fetch(apiKey);
        const movie_json = await movie_data.json();
        const movie_array = movie_json.results;
        const current_movie = movie_array[middle_index];
        const current_movie_poster = getImageUrl(current_movie.poster_path);
        category_poster.style.backgroundImage = `url(${current_movie_poster})`;
        middle_index++;
    })
}
showMiddleMovies(topMoviePoster, top_movies);
showMiddleMovies(currentMoviePoster, current_movies);
showMiddleMovies(upcomingMoviePoster, upcoming_movies);
showMiddleMovies(tvPoster, tv_shows);