
async function getMovies(numberPage){
    const url='https://api.themoviedb.org/3/discover/movie';
    const apiKey='34713abba31235292ef755be25fd8bd7';
    
    //console.log('Realizando llamada a la API de películas desde getMovies()');
    const response= await fetch(url+'?api_key='+apiKey+'&page='+numberPage);
    const responseJson= await response.json();
    //console.log('Realizando llamada a la API de películas desde getMovies()',responseJson);
    return responseJson;
}

export default getMovies;