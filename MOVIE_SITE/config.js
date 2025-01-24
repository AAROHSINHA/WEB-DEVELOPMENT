export const api_key = '6d55182e722462a8a2e9fb4634bb859e';
const search = 'https://api.themoviedb.org/3/search/movie?api_key=6d55182e722462a8a2e9fb4634bb859e&&query=Star%20Wars';
export const top_movies = 'https://api.themoviedb.org/3/movie/top_rated?api_key=6d55182e722462a8a2e9fb4634bb859e&language=en-US&page=1';
export const current_movies = 'https://api.themoviedb.org/3/movie/now_playing?api_key=6d55182e722462a8a2e9fb4634bb859e&language=en-US&page=1';
export const upcoming_movies = 'https://api.themoviedb.org/3/movie/upcoming?api_key=6d55182e722462a8a2e9fb4634bb859e&language=en-US&page=1';
export const tv_shows = 'https://api.themoviedb.org/3/trending/tv/day?api_key=6d55182e722462a8a2e9fb4634bb859e&language=en-US';


export const idToCategoryMovie = new Map([
    [28, "Action"],
    [12, "Adventure"],
    [16, "Animation"],
    [35, "Comedy"],
    [80, "Crime"],
    [99, "Documentary"],
    [18, "Drama"],
    [10751, "Family"],
    [14, "Fantasy"],
    [36, "History"],
    [27, "Horror"],
    [10402, "Music"],
    [9648, "Mystery"],
    [10749, "Romance"],
    [878, "Science Fiction"],
    [10770, "TV Movie"],
    [53, "Thriller"],
    [10752, "War"],
    [37, "Western"]
  ]);
export const idToCategoryColorMovie = new Map([
    [28, "#FF0000"], // Action (Red)
    [12, "#FFD700"], // Adventure (Gold/Yellow)
    [16, "#FF6347"], // Animation (Tomato/Orange)
    [35, "#FF7F50"], // Comedy (Coral/Orange)
    [80, "#4B0082"], // Crime (Indigo/Purple)
    [99, "#32CD32"], // Documentary (Lime Green)
    [18, "#800080"], // Drama (Purple)
    [10751, "#00BFFF"], // Family (Deep Sky Blue)
    [14, "#FFD700"], // Fantasy (Gold)
    [36, "#8B4513"], // History (Saddle Brown)
    [27, "#8B0000"], // Horror (Dark Red)
    [10402, "#0000FF"], // Music (Blue)
    [9648, "#D3D3D3"], // Mystery (Light Gray)
    [10749, "#FF69B4"], // Romance (Hot Pink)
    [878, "#00FFFF"], // Science Fiction (Aqua)
    [10770, "#696969"], // TV Movie (Dim Gray)
    [53, "#FFD700"], // Thriller (Gold/Yellow)
    [10752, "#A52A2A"], // War (Brown)
    [37, "#B8860B"]  // Western (Dark Goldenrod)
  ]);
  
  
export const idToCategoryTV = new Map([
    [10759, "Action & Adventure"],
    [16, "Animation"],
    [35, "Comedy"],
    [80, "Crime"],
    [99, "Documentary"],
    [18, "Drama"],
    [10751, "Family"],
    [10762, "Kids"],
    [9648, "Mystery"],
    [10763, "News"],
    [10764, "Reality"],
    [10765, "Sci-Fi & Fantasy"],
    [10766, "Soap"],
    [10767, "Talk"],
    [10768, "War & Politics"],
    [37, "Western"]
  ]);
  


// // running basics
// 'use strict';
// import { api_key } from "./config.js";

// const api = `https://api.themoviedb.org/3/movie/11?api_key=${api_key}`
// console.log(api);
// const getMovie = async function(){
//     const movie_request = await fetch(api);
//     // after getting movie request parse the json
//     const movie_json = await movie_request.json();
//     console.log(movie_json.original_title);
//     console.log(movie_json);
// }
// getMovie();

// const searchMovie = (movieName) => {
//     const search_api = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
//     console.log(search_api);
// }
// searchMovie('Star Wars');