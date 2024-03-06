
import { useParams } from 'react-router-dom';
import { useEffect, useState} from "react";
import { getMovie } from '../ClientMovies/ClientMovies';

function Overview(){
    
    const { movieId } = useParams();
    const [dataMovie, setDataMovie]= useState({})

    useEffect(()=>{
        const fetchDataMovie=   async()=>{
            const dataMovie= await getMovie(movieId);
            setDataMovie(dataMovie);
        } 
        fetchDataMovie()      
    },[])

    
    return(
        <>
            <h2>{dataMovie.original_title}</h2>
            <img src={`https://image.tmdb.org/t/p/w200${dataMovie.poster_path}`} alt='poster' />
            <p>Movie ID: {movieId}</p> 
            <p>{dataMovie.overview}</p>        
        </>
    )

}

export default Overview;


