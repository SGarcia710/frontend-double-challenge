import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "../assets/styles/MovieDetail.css";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

interface MovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Plot: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
}

export const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const previousSearch = localStorage.getItem("previousSearch");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=efe569de&i=${id}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      <Header />
      {movieDetails ? (
        <div className="movie-body">
          <Button
            text={`Back to "${previousSearch}"`}
            onClick={() => navigate(-1)}
            style={{
              marginBottom: "18px",
            }}
          />

          <div className="movie-block">
            <img src={movieDetails.Poster} alt={movieDetails.Title} />

            <div className="movie-details">
              <h2 className="movie-details--title">{movieDetails.Title}</h2>
              <p>{movieDetails.Year}</p>
              <p>{movieDetails.Plot}</p>
              <p>{movieDetails.Genre}</p>
              <p>{movieDetails.Director}</p>
              <p>{movieDetails.Runtime}</p>
              <div>
                {movieDetails.Ratings.map((rating, index) => (
                  <div key={index}>
                    <p>
                      <span style={{ fontWeight: 800 }}>{rating.Source}: </span>
                      {rating.Value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
