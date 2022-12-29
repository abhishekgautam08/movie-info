// import React from "react";
// import { useParams, NavLink } from "react-router-dom";
// import useMoviedata from "./useMoviedata";

// const SingleMovie = () => {
//   const { id } = useParams();
//   const { isLoading, movie } = useMoviedata(`&i=${id}`);

//   if (isLoading) {
//     return (
//       <div className="movie-section">
//         <div className="loading">Loading....</div>
//       </div>
//     );
//   }

//   const getMovie = async (url) => {
//     setIsLoading(true);
//     try {
//       const res = await fetch(url);
//       console.log(res);
//       const data = await res.json();
//       console.log(data);
//       if (data.Response === "True") {
//         setIsLoading(false);
//         setMovie(data.Search || data);
//         setIsError({ show: "false", msg: "" });
//       } else {
//         setIsError({ show: "true", msg: data.Error });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     let timeOut = setTimeout(() => {
//       getMovie(`${API_URL}&s=${movieParams}`);
//     }, 1000);
//     console.log("set");
//     return () => {
//       clearTimeout(timeOut);
//       console.log("clear");
//     };
//   }, [movieParams]);
//   return (
//     <>
//       <section className="movie-section">
//         <div className="movie.card">
//           <figure>
//             <img src={movie.Poster} alt="" />
//           </figure>
//           <div className="card-content">
//             <p className="titile">{movie.Title}</p>
//             <p className="card-text">{movie.Released}</p>
//             <p className="card-text">{movie.Genre}</p>
//             <p className="card-text">{movie.imdbRating}</p>
//             <p className="card-text">{movie.Country}</p>
//             <NavLink to="/" className="back-btn">
//               Go Back
//             </NavLink>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SingleMovie;

import React from "react";
import { useEffect, useState } from "react";
import { API_URL } from "../context";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState();
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
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
    <>
      <section className="movie-section">
        <div className="movie.card">
          <figure>
            <img src={movie.Poster} alt="" />
          </figure>
          <div className="card-content">
            <p className="titile">{movie.Title}</p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating}</p>
            <p className="card-text">{movie.Country}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleMovie;
