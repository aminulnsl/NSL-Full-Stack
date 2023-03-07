

const MovieList = ({m}) => {

    return (
        <li className="movie" key={m.id}>
            <img src={m.poster} alt={m.title}/>
            <p>
                {m.title} by {m.director}
                was realsed on {m.year}
            </p>
            <p>Rating: {m.rating}</p>
        </li>
    )
}

export default MovieList;