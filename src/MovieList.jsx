import { useState } from "react";
import { Movie } from "./Movie";
import { INITIAL_MOVIES } from "./INITIAL_MOVIES";
import { AddMovie } from "./AddMovie";

// Hooks will only work inside component
export function MovieList() {
  const [movieList, setMovieList] = useState(INITIAL_MOVIES);

  // Code
  return (
    <main>
      {/* props  movieList - Array of objects ,  setMovieList - function */}
      <AddMovie movieList={movieList} setMovieList={setMovieList} />

      <section className="movie-list-container">
        {movieList.map((mv) => (
          <Movie movie={mv} />
        ))}
      </section>
    </main>
  );
}
