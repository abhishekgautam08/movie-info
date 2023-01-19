import React, { useContext, useState, createContext } from "react";
import useMoviedata from "./components/useMoviedata";
// export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("Iron man");
  const { isLoading, isError, movie } = useMoviedata(`${query}`);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isError,
        movie,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
