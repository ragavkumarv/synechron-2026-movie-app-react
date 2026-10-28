import { useEffect, useState } from "react";

export function MovieCounter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  const incrementLike = () => {
    setLike(like + 1);
  };

  // state or prop - call fn run
  // useEffect(() => {
  //   console.log("Like", like);
  //   console.log("Dislike", disLike);
  // });

  // Dependencies array - only like changes
  // componentDidUpdate
  // useEffect(() => {
  //   console.log("1. Like", like);
  //   console.log("1. Dislike", disLike);
  // }, [like]);

  // useEffect(() => {
  //   console.log("2. Like", like);
  //   console.log("2. Dislike", disLike);
  // }, [like, disLike]);

  // componentDidMount - Dependencies array is empty
  // useEffect(() => {
  //   console.log("1. Like", like);
  //   console.log("1. Dislike", disLike);
  // }, []);

  return (
    <div className="movie-counter-container">
      <button onClick={incrementLike}>👍 {like}</button>
      <button onClick={() => setDisLike(disLike + 1)}>👎 {disLike}</button>
    </div>
  );
}
