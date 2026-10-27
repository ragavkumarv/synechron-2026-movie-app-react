import { useState } from "react";

export function MovieCounter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  const incrementLike = () => {
    setLike(like + 1);
  };

  return (
    <div className="movie-counter-container">
      <button onClick={incrementLike}>👍 {like}</button>
      <button onClick={() => setDisLike(disLike + 1)}>👎 {disLike}</button>
    </div>
  );
}
