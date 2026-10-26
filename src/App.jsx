// Named import
import { useState } from "react";
import "./index.css";
import { MovieList } from "./MovieList";
import { Msg } from "./Msg";
import { Users } from "./Users";

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

      <Counter />
    </div>
  );
}

// onClick - camelCase
// React - updates the DOM - Special variables - Hook variables
// const [state, setState] = useState(InitialValue)
// useState, useContext, useEffect .. etc - Hook  - fn - 'use'

//  C = f(S) | State changes Component re-renders
//  y = f(x)
function Counter() {
  // let like = 0;
  const [like, setLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
    </div>
  );
}
