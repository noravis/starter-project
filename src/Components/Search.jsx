import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style.scss'
import ListItem from './ListItem';
import NoMatches from './NoMatches';
import Active from './Active';




export default function Search() {

    const [movies, setMovies] = useState([]);
    const [text, setText] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState();
   

    useEffect(() => {
        if (text.length >= 3) {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b8c7e9e0d4469a4a40936c2596485af4&language=en-US&query=${text}`)
            .then((response) => {
                setMovies(response.data.results);
            })
        }    
    }, [text])


    const changeValue = (e) => {
   
        setText(e.target.value) 
    }
   
    const showMovie = (movie) => {
    console.log(movie);
     setSelectedMovie(movie)
     setIsActive(!isActive)

     console.log(movie);
    }



    const close = (e) => {
        setMovies(prevState => []);
        setSelectedMovie('')
        setText(prev => '');
        setIsActive(!isActive)
    }

    return (
        <>
        <div className="input-father">
            <input className="input-field" onChange={(e) => changeValue(e)} value={ selectedMovie ? selectedMovie.title : text}/>
            <div onClick={() => close()} className="close">+</div>
            {/* <img className='movie-icon' src={movie} alt=''/> */}
            <ul className={isActive? 'list-noShadow' : 'list'}>
                {  
                movies.length > 0 ?
    
                movies.slice(0,8).map(movie =>!isActive && <ListItem isActive={isActive} showMovie={showMovie} movie={movie}></ListItem>) :
                
                <NoMatches text={text}></NoMatches>
                }
            </ul>
            {
                selectedMovie && <Active movie={selectedMovie}></Active>
            }

        </div>
        </>
    )
}