import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };

    // setMovieList([newMovie, ...movieList]);

    fetch("https://6971d50b32c6bacb12c4aa19.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    // Task
    // On Success we need to navigate to /movies page
  };

  return (
    <div className="add-movie-container">
      <TextField
        variant="filled"
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        variant="filled"
        label="Poster"
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
      />

      <TextField
        variant="filled"
        label="Rating"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />

      <TextField
        variant="filled"
        label="Summary"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />

      <TextField
        variant="filled"
        label="Trailer"
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
      />

      <Button variant="contained" onClick={addMovie}>
        Add Movie
      </Button>
    </div>
  );
}
