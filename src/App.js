import React from 'react'
import {useEffect,useState} from'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// k_2hwwldf1
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";
// ./ means do one step above then find thecurrent file

// const movie1={
//         "Title": "Batman Begins",
//         "Year": "2005",
//         "imdbID": "tt0372784",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
//     }

// the bove is the static data

const App = () => {
    // asynchronous data means the data that takes some time for the data fetching
    const [searchTerm, setSearchTerm] = useState("");
    const [movies,setMovies]=useState([]);
     
    useEffect(()=>{
        searchMovies('Batman');
     },[]);

     
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
            setMovies(data.Search);
};

    return (
       <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
        <input
        value={searchTerm}
        // placeholder="Search for movies"
        // value="Superman"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies"
        />
        <img
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)}
        />
       </div>

       {/* {
           movies?.length>0
           ?(
            <div className="container">
           {movies.map((movie)=>(
            <MovieCard movie={movie} />
           ))}
            </div>
           ):(
            <div className="empty">
                <h2>No Movies Found</h2>
                </div>
           )
       } */}
{movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;