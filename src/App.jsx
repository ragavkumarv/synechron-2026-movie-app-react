// Named import
import "./index.css";
import { MovieList } from "./MovieList";
import { Msg } from "./Msg";
import { Users } from "./Users";
import { Counter } from "./Counter";
import { useState } from "react";

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
      {/* <MovieList /> */}

      {/* <Counter /> */}

      <ColorGame />
    </div>
  );
}

// Task - MovieCounter
// Only with Like & Dislike

// Typing -> onChange -> setColor  ->  color
// Task - Change the background color of input to the typed color
function ColorGame() {
  const [color, setColor] = useState("orange");
  return (
    <div>
      <input
        type="text"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />

      <h2>{color}</h2>
      <h2>{color}</h2>
    </div>
  );
}
