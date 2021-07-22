import React, { useState, useEffect } from "react";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import useHttp from "./hooks/use-http";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const apiUrl =
    "https://react-http-a01bf-default-rtdb.firebaseio.com/movies.json";
  const { isLoading, error, sendRequest: fetchMovies } = useHttp();

  const transformMovies = (movieObj) => {
    const loadedMovies = [];
    for (const key in movieObj) {
      loadedMovies.push({
        id: key,
        title: movieObj[key].title,
        // openingText: movieObj[key].openingText,
        // releaseDate: movieObj[key].releaseDate,
      });
    }
    setMovies(loadedMovies);
  };
  useEffect(() => {
    fetchMovies(
      {
        url: apiUrl,
      },
      transformMovies
    );
  }, [fetchMovies]);

  const fetchMoviesHandler = () => {
    fetchMovies(
      {
        url: apiUrl,
      },
      transformMovies
    );
  };

  const { isLoading2, error2, sendRequest: addMovie } = useHttp();

  const addMovieHandler = async (movie) => {
    console.log(movie);
    await addMovie(
      {
        url: apiUrl,
        method: "POST",
        body: { title: movie.title },
        headers: {
          "Content-Type": "application/json",
        },
      },
      null
    );
    fetchMovies(
      {
        url: apiUrl,
      },
      transformMovies
    );
  };

  let content = <p>Found no movies.</p>;
  if (!isLoading) {
    if (movies.length > 0) {
      content = <MoviesList movies={movies} />;
    } else if (error) {
      content = <p>{error}</p>;
    }
  } else {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
