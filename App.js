import {useEffect, useState} from 'react';
import {FaSearch} from 'react-icons/fa' ;
import './App.css';
import MovieCard from './MovieCard';
// 295850ff

const API_URL = 'https://www.omdbapi.com?apikey=295850ff' ;

const App = () => {

  const[movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`) ;
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
      searchMovies('Spiderman');
  }, []);

  return (
      <div className='app'>
        <h1>MovieLand</h1>

        <div className='search'>
          <input
            placeholder='Search for movies'
            value = {searchTerm} //required field in react's <input />
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <img 
            src = {FaSearch}
            alt = "search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      
        {
          movies?.length > 0 ? 
          (
            <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
          ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
          )
        }
    </div>
  );
};

export default App;
