import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch (`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies)
    setLoading(false)
  };
  useEffect(() => {
    getMovies();
  }, [])


  // map 함수를 쓸때에는 하위 element에 반드시 고유한 key를 붙여줘야 함.
  return (
    <div>
      {loading ? 
        <h1>Loading...</h1> : 
        <div>{movies.map((movie) => 
          (<div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            {movie.genres.map((g) => <li key={g}>{g}</li> )}
          </div>)
          )}
        </div>
      }
    </div>
  );
}

export default App;
