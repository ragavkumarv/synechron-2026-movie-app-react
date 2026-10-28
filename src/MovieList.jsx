import { Movie } from "./Movie";

// Hooks will only work inside component
export function MovieList({ movieList }) {
  // Code
  return (
    <main>
      <section className="movie-list-container">
        {movieList.map((mv, idx) => (
          <Movie movie={mv} id={idx} />
        ))}
      </section>
    </main>
  );
}
