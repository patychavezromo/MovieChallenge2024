import { useEffect, useState } from "react";
import getMovies from "../ClientMovies/ClientMovies";


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
        // const overview= <div>{movie.overview}</div>
        // alert(overview)
    }

    let allPosters=[];
    

    dataMovies.forEach(movie =>{
        const currentImg=<  img key={movie.id} 
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                            alt='poster' 
                            onClick={handleClick}/>;
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
            {/* <div>
                {allPosters}
            </div> */}
            <div>
                {allPosters}
                {/* {console.log('allpostersPaty',allPosters)} */}
                <button onClick={handlePrevPage} disabled={numberPage === 1}>Previous</button>
                <button onClick={handleNextPage}>Next</button>
            </div>
           
        </>
    )
}


export default Movies;