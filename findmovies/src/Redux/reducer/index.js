import {GET_ALL_SUGGESTED, GET_MOVIE_DETAIL, GET_POPULAR} from "../actions/index"

const initialState = {
    movies: [],
    filtered: [],
    popular: [],
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
                popular: action.payload,
            }
        default:
            return{
                ...state
            }
    }
}


export default rootReducer;