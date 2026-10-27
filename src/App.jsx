// Named import
import "./index.css";
import { MovieList } from "./MovieList";
import { Msg } from "./Msg";
import { Users } from "./Users";
import { Counter } from "./Counter";
import { ColorGame } from "./ColorGame";

// Only one item per file
export default function App() {
  // JS land - Start
  const names = ["Praveen", "Sarvesh", "Adi", "Rithik"];
  console.log(names);

  return (
    <div className="app-container">
      {/* {names.map((nm) => (
        <Msg name={nm} /> 
      ))} */}

      {/* <Users /> */}
      {/* <Movie /> */}
      <MovieList />

      {/* <Counter /> */}

      {/* <ColorGame /> */}
    </div>
  );
}

// Task - Create the routes
// 1. /users -> Users
// 2. /films -> MovieList
// 3. /color-game -> ColorGame
// 4. / -> Home
