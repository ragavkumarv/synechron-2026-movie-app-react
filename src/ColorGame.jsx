import { useState } from "react";
import { ColorBox } from "./ColorBox";

// Task - MovieCounter
// Only with Like & Dislike
// Typing -> onChange -> setColor  ->  color
// Task - Change the background color of input to the typed color
// Listen to Action -> Trigger re-render (setState)
export function ColorGame() {
  const [color, setColor] = useState("orange");

  const styles = {
    background: color,
  };

  // Task 1.1 - Display the boxes
  const INITIAL_COLORS = ["plum", "crimson", "orange", "teal"];

  const [colorList, setColorList] = useState(INITIAL_COLORS);

  return (
    <div>
      <input
        style={styles}
        type="text"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />

      {/* Task 1.2 - Adding the box. - copy colorList + newColor */}
      <button onClick={() => setColorList([...colorList, color])}>
        Add color
      </button>

      {colorList.map((clr) => (
        <ColorBox clr={clr} />
      ))}
    </div>
  );
}
