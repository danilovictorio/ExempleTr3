<template>
    <div class="movie-list">
      <h1 class="page-title">Welcome to Tr3Cine</h1>
      <div v-for="movie in movies" :key="movie.id" class="movie">
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
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrar horizontalmente */
  }
  
  .page-title {
    text-align: center; /* Centrar el texto */
  }
  
  .movie {
    width: 300px;
    margin: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .movie-poster img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .movie-details {
    margin-top: 20px;
  }
  </style>
  