import { Movie } from "./Movie";

// Hooks will only work inside component
export function MovieList({ movieList }) {
  // Code
  return (
    <main>
      <section className="movie-list-container">
        {movieList.map((mv) => (
          <Movie movie={mv} />
        ))}
      </section>
    </main>
  );
}
