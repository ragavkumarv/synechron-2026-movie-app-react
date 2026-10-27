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

  const styles = {
    background: color,
  };

  // Task 1.1 - Display the boxes
  const INITIAL_COLORS = ["plum", "crimson", "orange"];

  return (
    <div>
      <input
        style={styles}
        type="text"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />

      {/* Task 1.2 - Adding the box*/}
      <button>Add color</button>

      <ColorBox clr="blue" />
    </div>
  );
}

function ColorBox({ clr }) {
  const styles = {
    background: clr,
    height: "25px",
    width: "250px",
  };

  return <div style={styles}></div>;
}
