import Movie from "./Movie";

function MovieList({ movies }) {
  return (
    <div>
      <ul className="list">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
