// Named import
import { useState } from "react";
import { AddMovie } from "./AddMovie";
import { ColorGame } from "./ColorGame";
import "./index.css";
import { MovieList } from "./MovieList";
import { Users } from "./Users";

import { NavLink, Route, Routes, useParams } from "react-router";
import { INITIAL_MOVIES } from "./INITIAL_MOVIES";
import { NotFound } from "./NotFound";
import { Home } from "./Home";

// Only one item per file
export default function App() {
  // JS land - Start
  const names = ["Praveen", "Sarvesh", "Adi", "Rithik"];
  console.log(names);

  // Lifting the state up
  const [movieList, setMovieList] = useState(INITIAL_MOVIES);

  return (
    <div className="app-container">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="users">Users</NavLink>
            </li>
            <li>
              <NavLink to="movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="color-game">Color Game</NavLink>
            </li>
            <li>
              <NavLink to="movies/add">Add Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="movies" element={<MovieList movieList={movieList} />} />
        <Route
          path="movies/add"
          element={
            <AddMovie movieList={movieList} setMovieList={setMovieList} />
          }
        />

        {/* id -> path variable ->  /movies/100 | id = 100 */}
        <Route
          path="movies/:id"
          element={<MovieDetails movieList={movieList} />}
        />

        <Route path="color-game" element={<ColorGame />} />

        {/* * -> anything (Default case) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// Task - Print the movie name in the details page using `id`
function MovieDetails({ movieList }) {
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
      </div>
    </div>
  );
}
