import React from "react";
import { useEffect, useState } from "react";
import { API_URL } from "../context";
import { useParams, NavLink } from "react-router-dom";
import "./SingleMovie.css";

const SingleMovie = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState();
  const [isError, setIsError] = useState({ show: "false", msg: "" });

  // const setIsError = { show: "false", msg: "" };
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      } else {
        setIsError({
          show: true,
          msg: data.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      // eslint-disable-next-line
      getMovies(`${API_URL}&i=${id}`);
    }, 500);

    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading....</div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="Single-Card">
        <div className="card-info">
          <figure>
            <img src={movie.Poster} alt="" />
          </figure>

          <h1 className="title">
            <b>NAME-</b>
            {movie.Title}
          </h1>
          <p className="text">
            <b>Date Released-</b>
            {movie.Released}
          </p>
          <p className="text">
            <b>Genre-</b>
            {movie.Genre}
          </p>
          <p className="text">
            <b>Imdb Rating-</b>
            {movie.imdbRating}
          </p>
          <p className="text">
            <b>Country-</b>
            {movie.Country}
          </p>
          <p className="text">
            <b>Duration-</b>
            {movie.Runtime}
          </p>
          <p className="text">
            <b>Director-</b>
            {movie.Director}
          </p>
          <p className="text">
            <b>Writer-</b>
            {movie.Writer}
          </p>
          <p className="text">
            <b>Actors-</b>
            {movie.Actors}
          </p>

          <p className="text">
            <b>Director-</b>
            {movie.Director}
          </p>
          <p className="text">
            <b>Language-</b>
            {movie.Language}
          </p>
          <p className="text">
            <b>Awards-</b>
            {movie.Awards}
          </p>
          <p className="text">
            <b>Total Earning-</b>
            {movie.BoxOffice}
          </p>
          <p className="text">
            <b>Plot-</b>
            {movie.Plot}
          </p>
          <NavLink to="/">
            <button className="back-btn"> Go Back</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
