import { useState } from "react";

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

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

  return (
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
  );
}
