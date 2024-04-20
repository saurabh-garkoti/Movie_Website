import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "./context";

const Single = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // settimeout for debouncing
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 300);
    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }
  return (
    <>
      <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt=""></img>
          </figure>
          <div className="card-content">
            <p className="title">{movie.Title}</p>
            <p className="card-text">Released Date : {movie.Released}</p>
            <p className="card-text">Genre : {movie.Genre}</p>
            <p className="card-text">Director : {movie.Director}</p>
            <p className="card-text">Actors : {movie.Actors}</p>
            <p className="card-text">Rating : {movie.imdbRating}/10</p>
            <p className="card-text">Country : {movie.Country}</p>
            <p className="card-text">Runtime : {movie.Runtime}</p>
            <NavLink to="/" className="back-btn">
              Go Back
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Single;
