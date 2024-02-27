import { useEffect, useState } from "react";
import getMovies from "../ClientMovies/ClientMovies";
import { Link } from 'react-router-dom';


function Movies(){
    const [dataMovies,setDataMovies]= useState([])
    const [numberPage, setNumberPage] = useState(1);

    useEffect(()=>{
        const fetchData=   async()=>{
            const dataMovies= await getMovies(numberPage)
            //console.log('patymovies',dataMovies)
            setDataMovies(dataMovies.results);
        } 
        fetchData()      
    },[numberPage])

    //console.log('pagepaty',page)

    const handleClick=()=> {
        const overview= ()=> {<Link to="/Overview">Ir a Otra Ruta</Link>}
        overview()
        console.log('click')
    }

    let allPosters=[];
    

    dataMovies.forEach(movie =>{
        const currentImg=   <Link to="/Overview">
                                <img key={movie.id} 
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                                alt='poster' 
                                onClick={handleClick}/>
                            </Link>
        allPosters.push(currentImg);
    })

    console.log('allpostersPaty3',allPosters)
    
    const handlePrevPage = () => {
        setNumberPage(prevPage => prevPage - 1);
    };

    const handleNextPage = () => {
        setNumberPage(prevPage => prevPage + 1);
    };
    
    return (
        <>
            <div>
                {allPosters}
                <button onClick={handlePrevPage} disabled={numberPage === 1}>Previous</button>
                <button onClick={handleNextPage}>Next</button>
            </div>
           
        </>
    )
}


export default Movies;