export default function ListItem({movie, showMovie}) {
    return (
        <li className='list-item' onClick={() => showMovie(movie)} key={movie.id}>  {movie.title} <span className='list-child'>{movie.vote_average} Rating,  {movie.release_date.slice(0,4)}</span></li>
    )
}

