import {movies} from './data/movies.js'
import MovieList from './MovieList.js'
import './movies.css'

const fetchMovieData = () => {
    return movies;
}

const MovieComponent = (movies) => {
    const movieData = fetchMovieData();

    return (
        <div className="movie-container">
            <h2>Movies</h2>
            <ul className="movie-list">
                {
                    movieData.map((movie) => (
                        <MovieList key={movie.id} m={movie} />
                    ))
                }
            </ul>
        </div>
    )
}

export default MovieComponent;