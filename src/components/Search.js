import React from "react";
import { useGlobalContext } from "../context";
import "./Search.css";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <>
      <div className="Search-Container">
        <div className="Upper-text">
          <h1>Search your favourite movie</h1>
        </div>
        <form
          action="#"
          className="search-bar"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <input
              type="text"
              placeholder="search here"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="card-error">
            <p>{isError.show && isError.msg}</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
