import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import "./Movie.css";
import Noimage from "../../src/image/Noimage.jpg";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <>
      <div className="card-container">
        <div className="row">
          {movie.map((currentMovie) => {
            const { imdbID, Title, Poster, Year } = currentMovie;
            const imageUrl = Poster ? Poster : Noimage;
            return (
              <div
                className="col-md-12 col-lg-4 col-sm-3"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={imdbID}
              >
                <NavLink to={`/movie/${imdbID}`}>
                  <div
                    className="card"
                    style={{
                      width: "400px",
                      height: "500px",
                      marginBottom: "20px",
                    }}
                  >
                    <div className="image">
                      <img
                        src={imageUrl}
                        className="card-img-top "
                        alt="Noimage"
                      />
                    </div>
                    <div className="Title">
                      <b>{Title}</b>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movie;
