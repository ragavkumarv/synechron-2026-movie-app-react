// Named import
import { ColorGame } from "./ColorGame";
import "./index.css";
import { MovieList } from "./MovieList";
import { Users } from "./Users";

import { NavLink, Route, Routes } from "react-router";

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
              <NavLink to="films">Films</NavLink>
            </li>
            <li>
              <NavLink to="color-game">Color Game</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="films" element={<MovieList />} />
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
  return <h1>404 Not found</h1>;
}

function Home() {
  return <h1>Welcome to the movie app 🎉🎉</h1>;
}
