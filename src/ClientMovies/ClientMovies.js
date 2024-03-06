const apiKey='34713abba31235292ef755be25fd8bd7';
const url='https://api.themoviedb.org/3/discover/movie';
const urlMovie='https://api.themoviedb.org/3/movie/';

async function getMovies(numberPage){  
    //console.log('Realizando llamada a la API de películas desde getMovies()');
    const response= await fetch(url+'?api_key='+apiKey+'&page='+numberPage);
    const responseJson= await response.json();
    //console.log('Realizando llamada a la API de películas desde getMovies()',responseJson);
    return responseJson;
}



export async function getMovie(movieId){
    const responseMovie= await fetch(urlMovie+movieId+'?api_key='+apiKey);
    const responseJsonMovie= await responseMovie.json();
    console.log('responseJsonMoviePaty',responseJsonMovie)
    return responseJsonMovie;
}


export default getMovies;