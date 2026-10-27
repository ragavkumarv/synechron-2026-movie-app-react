// Named import
import { useState } from "react";
import { AddMovie } from "./AddMovie";
import { ColorGame } from "./ColorGame";
import "./index.css";
import { MovieList } from "./MovieList";
import { Users } from "./Users";

import { NavLink, Route, Routes } from "react-router";
import { INITIAL_MOVIES } from "./INITIAL_MOVIES";

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

        <Route path="color-game" element={<ColorGame />} />

        {/* * -> anything (Default case) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// Task - Create the routes
// 1. /users -> Users
// 2. /films -> MovieList
// 3. /color-game -> ColorGame
// 4. / -> Home

function NotFound() {
  return (
    <div>
      <h1>404 Not found</h1>
      <img
        src="https://assets-v2.lottiefiles.com/a/0295c0a4-3532-11ef-9f29-13073c8721a8/xgrJ1gZOP5.gif"
        alt=""
      />
    </div>
  );
}

function Home() {
  return <h1>Welcome to the movie app 🎉🎉</h1>;
}
