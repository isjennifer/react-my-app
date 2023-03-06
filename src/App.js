import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

// 로딩 후에 데이터를 가져오는 방법 1.
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.data.movies)
      setLoading(false)
    })
  }, [])

// 로딩 후에 데이터를 가져오는 방법 2. (1과 같은 코드)
  const getMovies = async () => {
    const response = await fetch (`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies)
    setLoading(false)
  };
  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div>
      {loading ? <h1>Loading...</h1> : null}
    </div>
  );
}

export default App;
