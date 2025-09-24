import Movie from "./Movie";

function MovieList({ movies, onSelectedMovie }) {
  return (
    <div>
      <ul className="list list-movies">
        {movies.map((movie) => (
          <Movie
            movie={movie}
            key={movie.imdbID}
            onSelectedMovie={onSelectedMovie}
          />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
