
import star from '../common/star.svg'


export default function Active ({movie}) {
    return (
        <div  className="width">
            <div className="active-father">
                <img className='pic' src={`https://www.themoviedb.org/t/p/w1280${movie.poster_path}`} alt='pix'/>
                <div className="active-child">
                    <b className="active-title">{movie.title} ({movie.release_date.slice(0,4)})</b> 
                    <i className="active-title1">Original language: {movie.original_language.toUpperCase()}</i> 
                    <div className='active-father'>
                        <img className="star" src={star} alt="star"/>
                        <div className='active-child'>
                            <div className="vote">{movie.vote_average}
                                <span className="min">/10</span>
                            </div>
                            <div className="font-grey">{movie.vote_count} votes</div>
                            
                        </div>
                       
                    </div> 
                <div className="overview">{movie.overview}</div>
                </div>
            </div>
        </div>
    )
}