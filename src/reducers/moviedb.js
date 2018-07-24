const initialState = {
    config: null,         // object from TMDb containing its configuration
    error: null,          // error object from API calls
    genres: null,         // object from TMDb containing movie's genres
    loading: false,       // a simple flag indicating if a request is active
    filterGenres: [],     // a filter for genres a movie has to be classified as
    filterMinRating: 3,   // a filter for minimum rating a movie has to have to be displayed
    movies: null          // object from TMDb containing now playing movies
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'MOVIE_API_REQUEST':
            return { ...state, loading: true, error: null }
        case 'MOVIE_API_SUCCESS_CONFIG':
            return { ...state, loading: false, config: action.config }
        case 'MOVIE_API_SUCCESS_GENRES':
            return { ...state, loading: false, genres: action.genres }
        case 'MOVIE_API_SUCCESS_MOVIES':
            return { ...state, loading: false, movies: action.movies }
        case 'MOVIE_API_ERROR':
            return { ...state, loading: false, error: action.error, movies: null }
        case 'MOVIE_CHANGE_FILTER_GENRE':
            if (action.checked) {
                // adding a genre to the filter and avoid duplicates
                if (!state.filterGenres.find(id => id === action.genreId)) {
                    const filterGenres = [ ...state.filterGenres, action.genreId ]

                    return { ...state, filterGenres }
                } else {
                    return state
                }
            } else {
                // removing a genre from the filter
                const filterGenres = state.filterGenres.filter(id => id !== action.genreId)

                return { ...state, filterGenres }
            }
            return state
        case 'MOVIE_SET_FILTER_MIN_RATING':
            return { ...state, filterMinRating: action.filterMinRating }
        default:
            return state
    }
}