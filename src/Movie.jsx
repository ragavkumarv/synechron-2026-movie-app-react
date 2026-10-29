import { useState } from "react";
import { MovieCounter } from "./MovieCounter";
import { cool } from "./Fun";
import { useNavigate } from "react-router";

// Presentation
// Pure Component - Same Input - Same Output

// Task
// rating > 8 -> green | else red
export function Movie({ movie, id, deleteButton }) {
  // Code
  const [show, setShow] = useState(true);

  // property - camelCase
  const styles = {
    color: movie?.rating > 8 ? "green" : "red",
    // fontStyle: "italic",
  };

  // navigate - fn
  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <img src={movie?.poster} alt={movie?.name} />
      <div className="movie-spec-container">
        <h3 className="movie-name">{movie?.name}</h3>
        <p className="movie-rating" style={styles}>
          ⭐ {movie?.rating}
        </p>
      </div>
      {/* Task - Toggle Summary */}
      {/* Clue - Hook + Conditional rendering */}
      <button onClick={() => setShow(!show)}>Toggle Summary</button>
      <button onClick={() => navigate(`/movies/${id}`)}>Info</button>
      {show && <p className="movie-summary">{movie?.summary}</p>}
      <MovieCounter />

      {/* Render props */}
      {deleteButton}
    </div>
  );
}
