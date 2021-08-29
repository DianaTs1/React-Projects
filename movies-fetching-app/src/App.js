import React, {useState, useEffect, useCallback} from 'react';
import Movies from './components2/Movies';
import './App.css';
import AddMovie from './components2/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // function fetchedMoviesHandler() {
  //   fetch("https://swapi.dev/api/films").then(response => {
  //     return response.json();
  //   }).then(data => {
  //     const transformedMovies = data.results.map(movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date,
  //         title: movieData.title
  //       }
  //     }
  //       )
  //     setMovies(transformedMovies)
  //   });
  // }


  // Different syntax for async

  // useEffect(() => {
  //   fetchedMoviesHandler()
  // }, [])

  const fetchedMoviesHandler = useCallback(async() => {
      setError(null);
      setIsLoading(true)

      try {
        const response = await fetch("https://films-app-react-default-rtdb.firebaseio.com/movie.json");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();

        const loadedMoveis = []

        for (const key in data) {
          loadedMoveis.push({
            id: key,
            title: data[key].title, 
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
          });
        };

        setMovies(loadedMoveis);
      }
      catch (error){
        setError(error.message)
        setIsLoading(false)
      };
      setIsLoading(false)
  }, []);

  useEffect(() => {
    fetchedMoviesHandler()
  }, [fetchedMoviesHandler])

  async function addMovieHandler(movie) {
    const response = await fetch("https://films-app-react-default-rtdb.firebaseio.com/movie.json", {
      method: 'POST',
      body: JSON.stringify(movie),
      header: {
        "Content-Type" : 'application/json'
      }
    });
    const data = await response.json();
    console.log(data)
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <Movies moviesList={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section style={{"textAlign": 'center'}}> 
        <button onClick={fetchedMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
