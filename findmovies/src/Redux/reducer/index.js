import {GET_ALL_SUGGESTED, GET_MOVIE_DETAIL, GET_POPULAR, GET_ALL_MOVIES, ORDER_BY_POP} from "../actions/index"

const initialState = {
    movies: [],
    filtered: [],
    AllMovies: [],
    order: [],
    movieDetail: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SUGGESTED:
            return{
                ...state,
                movies: action.payload,
            }
        case GET_MOVIE_DETAIL:
            return{
                ...state,
                movieDetail: action.payload,
            }
        case GET_POPULAR:
            
            return{
                ...state,
                movies: action.payload,
            }
        case GET_ALL_MOVIES:
            
            return{
                ...state,
                allMovies: action.payload,
            }
        default:
            return{
                ...state
            }
    }
}


export default rootReducer;