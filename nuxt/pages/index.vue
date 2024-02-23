<template>
    <div class="movie-list">
      <h1 class="page-title">Welcome to CineCar</h1>
      <div class="movies-container">
        <div v-for="movie in movies" :key="movie.id" class="movie">
          <div class="movie-card">
            <div class="movie-poster">
              <img :src="movie.imageLink" :alt="movie.title">
            </div>
            <div class="movie-details">
              <h2>{{ movie.title }}</h2>
              <p>{{ movie.description }}</p>
              <p>Director: {{ movie.director }}</p>
              <p>Release Year: {{ movie.releaseYear }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import moviesData from '@/peliculas.json';
  
  export default {
    data() {
      return {
        movies: moviesData,
      };
    },
  };
  </script>
  
  <style>
  .movie-list {
    text-align: center;
  }
  
  .page-title {
    margin-bottom: 20px;
  }
  
  .movies-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 2px solid #ddd; 
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); 
  }
  
  .movie {
    margin: 20px;
  }
  
  .movie-card {
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease; /* Añadir transición */
  }
  
  .movie-card:hover {
    transform: translateY(-5px); /* Efecto de levantar al pasar el ratón */
  }
  
  .movie-poster img {
    width: 100%;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .movie-details {
    background-color: #f9f9f9;
    padding: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  </style>
  