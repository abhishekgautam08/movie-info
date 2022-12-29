import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <section className="movie-page">
      <div className="grid grid-4-col">
        {movie.map((currentMovie) => {
          const { imdbID, Title, Poster, Year } = currentMovie;
          return (
            <NavLink to={`i=${imdbID}`} key={imdbID}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={Poster} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3 className="card-title">{Title}</h3>
                  <h4 className="card-title">{Year}</h4>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movie;
