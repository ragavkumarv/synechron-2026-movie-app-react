import { useState } from "react";

// onClick - camelCase
// React - updates the DOM - Special variables - Hook variables
// const [state, setState] = useState(InitialValue)
// useState, useContext, useEffect .. etc - Hook  - fn - 'use'
//  C = f(S) | State changes Component re-renders
//  y = f(x)
export function Counter() {
  // let like = 0;
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div className="counter-container">
      <div>
        <button onClick={() => setLike(like + 1)}>👍 {like}</button>
        <button onClick={() => setDisLike(disLike + 1)}>👎 {disLike}</button>
      </div>
      <progress max={like + disLike} value={like}></progress>

      {/* Conditional rendering */}
      {/* {5 < 4 ? <h1>Wow</h1> : <p>Cool</p>} */}

      {/* Task - Like is more than dislike by 10 then h2 (You are awesome 🎉🎉) */}
      {like - disLike >= 10 ? <h3>You are awesome 🎉🎉</h3> : null}

      {/* Short hand */}
      {like - disLike >= 10 && <h3>You are awesome 🎉🎉</h3>}
    </div>
  );
}
