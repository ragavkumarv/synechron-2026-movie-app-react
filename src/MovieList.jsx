import { useState } from "react";
import { Movie } from "./Movie";
import { INITIAL_MOVIES } from "./INITIAL_MOVIES";

export function MovieList() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [movieList, setMovieList] = useState(INITIAL_MOVIES);

  const addMovie = () => {
    //copy movieList + newMovie
    // const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    // };

    // Object shorthand
    const newMovie = {
      name,
      poster,
      rating,
      summary,
    };

    setMovieList([newMovie, ...movieList]);
  };

  // Code
  return (
    <main>
      <div className="add-movie-container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Poster"
          value={poster}
          onChange={(event) => setPoster(event.target.value)}
        />
        <input
          type="text"
          placeholder="Rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
        />

        <button onClick={addMovie}>Add Movie</button>
      </div>

      <section className="movie-list-container">
        {movieList.map((mv) => (
          <Movie movie={mv} />
        ))}
      </section>
    </main>
  );
}
