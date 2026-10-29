import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

// Hooks will only work inside component
export function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const getMovies = () => {
    fetch("https://6971d50b32c6bacb12c4aa19.mockapi.io/movies")
      .then((res) => res.json())
      .then((data) => setMovieList(data));
  };

  // Code
  // Delete -> GET
  const deleteMovie = (id) => {
    // Race condition
    // Lorry
    fetch(`https://6971d50b32c6bacb12c4aa19.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(() => {
      // Ferrari
      getMovies();
    });
  };

  // Re-render -> useEffect - I am only for mounting phase | not for updation phase
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main>
      <section className="movie-list-container">
        {movieList.map((mv) => (
          <Movie
            movie={mv}
            id={mv?.id}
            deleteButton={
              <IconButton
                color="error"
                aria-label="delete"
                onClick={() => deleteMovie(mv?.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          />
        ))}
      </section>
    </main>
  );
}
