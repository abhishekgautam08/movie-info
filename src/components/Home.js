import Search from "./Search";
import Movie from "./Movie";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="background">
        <Search />
        <Movie />
      </div>
    </>
  );
};

export default Home;
