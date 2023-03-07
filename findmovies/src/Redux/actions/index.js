import axios from "axios";

export const GET_ALL_SUGGESTED = "GET_ALL_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const GET_POPULAR = "GET_POPULAR";

export const getAllSuggested = () => async(dispatch) =>{
    try {
        const all = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c3caae88c341b6c157596bb8d710a2de')
        return dispatch({
            type:GET_ALL_SUGGESTED,
            payload: all.data,
        })
    } catch (error) {
        
    }
}

export const getMoviesDetail = (id) => async(dispatch) =>{
    try {
        const detail = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c3caae88c341b6c157596bb8d710a2de`)
        return dispatch({
            type: GET_MOVIE_DETAIL,
            payload: detail.data,
        })
    } catch (error) {
        
    }
}

export const getPopular = () => async(dispatch) => {
    try {
        const pop = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c3caae88c341b6c157596bb8d710a2de')
        return dispatch({
            type: GET_POPULAR,
            payload: pop.data,
        })
    } catch (error) {
        
    }
}