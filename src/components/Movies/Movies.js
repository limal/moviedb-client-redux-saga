import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './Movies.css'
import Movie from './Movie'
import MovieGenreFilter from './MovieGenreFilter'
import MovieRatingFilter from './MovieRatingFilter'

class Movies extends PureComponent {
    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        const {
            allMovies,
            config,
            filterGenres,
            filterMinRating
        } = this.props

        // filter movies by rating and genres:
        // - for each movie:
        const movies = (allMovies && filterGenres) && allMovies.filter(movie => {
            // check its genre that works as follows:
            // - for each filter genre
            // - make sure that the current movie has each filter genre (note the && opeartor line below) set in its genre_ids
            const genreCheck = filterGenres.map(id => id).reduce((acc, cur) => acc && movie.genre_ids.find(id => cur === id), true)

            // make sure its above the minimum rating as well
            return movie.vote_average > filterMinRating && genreCheck
        })
        // I'm not focusing on UI for this. It loads nearly instantly anyway for demo purposes
        const Loading = (props) => props.loading ? <h1>Please wait...</h1> : ''

        return [
            <Loading />,
            <div className="Movies__Filters">
                <MovieRatingFilter />
                <MovieGenreFilter />
                { movies && <h3>Total movies: { movies.length }</h3> }
            </div>,
            <ul className="Movies">
                { movies && movies.map((movie, i) => <Movie movie={movie} config={config} key={i} />) }
            </ul>
        ]
    }
}

export default connect(
    state => ({
        allMovies: state.moviedb.movies,
        config: state.moviedb.config,
        error: state.moviedb.error,
        filterGenres: state.moviedb.filterGenres,
        filterMinRating: state.moviedb.filterMinRating,
        genres: state.moviedb.genres,
        loading: state.moviedb.loading
    }),
    dispatch => ({
        fetchMovies: () => dispatch({ type: 'MOVIE_API_REQUEST' })
    })
)(Movies)