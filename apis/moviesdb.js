import axios from "axios";
import apiKey from "./constants"

const serverUrl = `https://api.themoviedb.org/3/`

const trendingMoviesEndpint = `${serverUrl}trending/movie/day?language=en-US`
const upcommingMoviesEndpint = `${serverUrl}movie/upcoming?language=en-US?`
const topRatedMoviesEndpint = `${serverUrl}movie/top_rated?language=en-US`
const movieDetailsEndpint =id=> `${serverUrl}movie/${id}`
const movieCreditsEndpint =id=> `${serverUrl}movie/${id}/credits?language=en-US`
const movieSimilarEndpint =id=> `${serverUrl}movie/${id}/similar`

const apiCall = async (endPoint,params)=>{
    const option = {
        method:"GET",
        url:endPoint,
        params: params?params:{}
    }

    try{
        const response = await axios.request(option);
        return response.data;
    }catch(error){
        console.log("error: "+error)
    }
}

export const fetchTrendingMovies = () =>{
    return apiCall(trendingMoviesEndpint);
}

export const fetchUpcommingMovies = () =>{
    return apiCall(upcommingMoviesEndpint);
}

export const fetchTopRatedMovies = () =>{
    return apiCall(topRatedMoviesEndpint);
}

export const fetchMovie = id =>{
    return apiCall(movieDetailsEndpint(id));
}

export const fetchMovieCredits = id =>{
    console.log(id)
    return apiCall(movieCreditsEndpint(id));
}

export const fetchMovieSimilar = id =>{
    return apiCall(movieSimilarEndpint(id));
}


export const image500 = path => path?`https://image.tmdb.org/t/p/w500${path}`:null;
export const image342 = path => path?`https://image.tmdb.org/t/p/w342${path}`:null;
export const image185 = path => path?`https://image.tmdb.org/t/p/w185${path}`:null;