import axios from "axios";
import apiKey from "./constants"

const serverUrl = `https://api.themoviedb.org/3/`

const trendingMoviesEndpint = `${serverUrl}trending/movie/day?language=en-US`
const upcommingMoviesEndpint = `${serverUrl}movie/upcoming?language=en-US?`
const topRatedMoviesEndpint = `${serverUrl}movie/top_rated?language=en-US`
const movieDetailsEndpint =id=> `${serverUrl}movie/${id}?language=en-US`
const movieCreditsEndpint =id=> `${serverUrl}movie/${id}/credits?language=en-US`
const movieSimilarEndpint =id=> `${serverUrl}movie/${id}/similar?language=en-US`
const castDetailsEndpint =id=> `${serverUrl}person/${id}`
const castMoviesEndpint =id=> `${serverUrl}person/${id}/movie_credits?language=en-US`
const movieSearchEndpint =value=> `${serverUrl}search/movie?query=${value}`

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
    return apiCall(movieCreditsEndpint(id));
}

export const fetchMovieSimilar = id =>{
    return apiCall(movieSimilarEndpint(id));
}

export const fetchCast = id =>{
    return apiCall(castDetailsEndpint(id));
}

export const fetchCastMovies = id =>{
    return apiCall(castMoviesEndpint(id));
}

export const searchMovies = value =>{
    return apiCall(movieSearchEndpint(value));
}


export const image500 = path => path?`https://image.tmdb.org/t/p/w500${path}`:null;
export const image342 = path => path?`https://image.tmdb.org/t/p/w342${path}`:null;
export const image185 = path => path?`https://image.tmdb.org/t/p/w185${path}`:null;

export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';
