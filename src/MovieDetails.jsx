import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";

// Task - Print the movie name in the details page using `id`
export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://6971d50b32c6bacb12c4aa19.mockapi.io/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  return (
    <div className="movie-details-container">
      <iframe
        width="100%"
        height="575"
        src={movie?.trailer}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="movie-details-content-container">
        <div className="movie-spec-container">
          <h3 className="movie-name">{movie?.name}</h3>
          <p className="movie-rating">⭐ {movie?.rating}</p>
        </div>
        <p className="movie-summary">{movie?.summary}</p>
        <button>Back</button>
      </div>
    </div>
  );
}
