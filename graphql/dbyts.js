import fetch from "node-fetch";
import axios from "axios";

const BASE_URL = "https://yts.mx/api/v2"
const LIST_MOVIES_URL = `${BASE_URL}/list_movies.json`
const MOVIES_DETAILS_URL = `${BASE_URL}/movie_details.json`
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}/movie_suggestions.json`
const MOVIE_PARENTAL_GUIDES_URL = `${BASE_URL}/movie_parental_guides.json`

export const getMovies = async (limit, rating) => {
    const {
        data:{
            data: {movies}
        }
    } = await axios(LIST_MOVIES_URL, {
      params: {
          limit,
          minimum_rating: rating
      }  
    });
    return movies;
};

export const getMovie = async id => {
    const{
        data: {
            data: {movie}
        }
    }  = await axios(MOVIES_DETAILS_URL, {
        params: {
            movie_id: id
        }
    });
    return movie;
};

export const getSuggestions = async id => {
    const{
        data: {
            data: {movies}
        }
    } = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {
            movie_id: id
        }
    });
    return movies
};

export const getParentalGuides = async id => {
    const{
        data: {
            data: {parental_guides}
        }
    } = await axios(MOVIE_PARENTAL_GUIDES_URL, {
        params: {
            movie_id: id
        }
    });
    return parental_guides
};


