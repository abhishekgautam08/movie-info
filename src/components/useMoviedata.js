import { useState, useEffect } from "react";

export const API_URL = `https://www.omdbapi.com/?&apikey=${process.env.REACT_APP_API_KEY}`;
// console.log(API_URL);

const useMoviedata = (movieParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);

      const data = await res.json();

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search || data);
        setIsError({ show: "false", msg: "" });
      } else {
        setIsError({ show: "true", msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}&s=${movieParams}`);
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [movieParams]);

  return { isLoading, isError, movie };
};

export default useMoviedata;
