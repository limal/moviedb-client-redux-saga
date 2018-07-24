import { call, put, takeLatest } from "redux-saga/effects"
import axios from "axios"

const key = atob(`ZDEwNDg3NzNkOTkzZmFlMjZjZGNiYzk2MjE5MDZhZmI${'='}`)

export function* watcherSaga() {
    yield takeLatest("MOVIE_API_REQUEST", fetchApiSaga)
}

function fetchMovies() {
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/now_playing?region=GB&api_key=d1048773d993fae26cdcbc9621906afb&region=GB&api_key=d1048773d993fae26cdcbc9621906afb&`
    })
}

function fetchConfig() {
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/configuration?api_key=${key}&language=en`
    })
}

function fetchGenres() {
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en`
    })
}

function* fetchApiSaga() {
    try {
        let response = yield call(fetchMovies)
        const movies = response.data

        response = yield call(fetchConfig)
        const config = response.data

        response = yield call(fetchGenres)
        const genres = response.data

        yield [
            put({ type: "MOVIE_API_SUCCESS_MOVIES", movies }),
            put({ type: "MOVIE_API_SUCCESS_CONFIG", config }),
            put({ type: "MOVIE_API_SUCCESS_GENRES", genres }),
        ]
    } catch (error) {
        yield put({ type: "MOVIE_API_ERROR", error })
    }
}