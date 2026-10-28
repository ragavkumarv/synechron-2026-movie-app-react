import { useParams } from "react-router";

// Task - Print the movie name in the details page using `id`
export function MovieDetails({ movieList }) {
  const { id } = useParams();

  const movie = movieList[id];

  console.log(movieList, movie);

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
