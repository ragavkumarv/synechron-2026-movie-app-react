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
import { MovieDetails } from "./MovieDetails";

// Only one item per file
export default function App() {
  // JS land - Start
  const names = ["Praveen", "Sarvesh", "Adi", "Rithik"];
  console.log(names);

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
        <Route path="movies" element={<MovieList />} />
        <Route path="movies/add" element={<AddMovie />} />

        {/* id -> path variable ->  /movies/100 | id = 100 */}
        <Route path="movies/:id" element={<MovieDetails />} />

        <Route path="color-game" element={<ColorGame />} />

        {/* * -> anything (Default case) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
