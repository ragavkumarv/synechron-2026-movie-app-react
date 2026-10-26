// Presentation
export function Movie({ movie }) {
  // Code
  return (
    <div className="movie-container">
      <img src={movie?.poster} alt={movie?.name} />
      <div className="movie-spec-container">
        <h3 className="movie-name">{movie?.name}</h3>
        <p className="movie-rating">⭐ {movie?.rating}</p>
      </div>
      {/* Task - Toggle Summary */}
      {/* Clue - Hook + Conditional rendering */}
      <button>Toggle Summary</button>
      <p className="movie-summary">{movie?.summary}</p>
    </div>
  );
}
