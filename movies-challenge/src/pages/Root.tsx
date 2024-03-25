import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Header } from "../components/Header";
import "../assets/styles/Root.css";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}
export const Root = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchMovies = async (searchString: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=efe569de&s=${searchString}`
      );

      if (response.data.Search) {
        const sortedMovies = response.data.Search.sort(
          (a: Movie, b: Movie) => parseInt(b.Year) - parseInt(a.Year)
        );
        setMovies(sortedMovies);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setMovies([]);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const previousSearch = localStorage.getItem("previousSearch");

    if (previousSearch) {
      setSearchTerm(previousSearch);
      searchMovies(previousSearch);
    }
  }, []);

  return (
    <div className="root-container">
      <Header />

      <div className="search-container">
        <div className="search-block">
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={
              window.innerWidth > 425
                ? {
                    marginRight: "8px",
                    marginBottom: "4px",
                  }
                : {
                    marginBottom: "4px",
                  }
            }
          />

          <Button
            text="Search"
            onClick={() => searchMovies(searchTerm)}
            disabled={searchTerm.length <= 2 || isLoading}
          />
        </div>

        {movies.length ? (
          <p className="search-block--count">
            Movies found:{" "}
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              {movies.length}
            </span>
          </p>
        ) : null}
      </div>

      <div className="movies-container">
        {movies.map((movie) => (
          <div
            onClick={() => {
              localStorage.setItem("previousSearch", searchTerm);
              navigate(`/${movie.imdbID}`);
            }}
            key={movie.imdbID}
            className="movie-item"
          >
            <div className="movie-item--details">
              <h3 className="movie-item--title">{movie.Title}</h3>
              <p className="movie-item--year">{movie.Year}</p>
            </div>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="movie-item--poster"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
