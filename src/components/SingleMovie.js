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
    <div className="background">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <figure className="img">
              <img src={movie.Poster} alt="" />
            </figure>

            <h1 className="card-title">
              <b>NAME-</b>
              {movie.Title}
            </h1>
            <p className="card-text">
              <b>Date Released-</b>
              {movie.Released}
            </p>
            <p className="card-text">
              <b>Genre-</b>
              {movie.Genre}
            </p>
            <p className="card-text">
              <b>Imdb Rating-</b>
              {movie.imdbRating}
            </p>
            <p className="card-text">
              <b>Country-</b>
              {movie.Country}
            </p>
            <p className="card-text">
              <b>Duration-</b>
              {movie.Runtime}
            </p>
            <p className="card-text">
              <b>Director-</b>
              {movie.Director}
            </p>
            <p className="card-text">
              <b>Writer-</b>
              {movie.Writer}
            </p>
            <p className="card-text">
              <b>Actors-</b>
              {movie.Actors}
            </p>

            <p className="card-text">
              <b>Director-</b>
              {movie.Director}
            </p>
            <p className="card-text">
              <b>Language-</b>
              {movie.Language}
            </p>
            <p className="card-text">
              <b>Awards-</b>
              {movie.Awards}
            </p>
            <p className="card-text">
              <b>Total Earning-</b>
              {movie.BoxOffice}
            </p>
            <p className="card-text">
              <b>Plot-</b>
              {movie.Plot}
            </p>
          </div>
          <NavLink to="/">
            <button className="back-btn"> Go Back</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
