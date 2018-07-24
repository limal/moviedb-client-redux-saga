import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './Movies.css'
import Movie from './Movie'

class Movies extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchMovies()
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        const {
            loading,
            movies
        } = this.props

        return (
            <div className="Movies">
                { loading && <h1>Please wait...</h1> /* I'm not focusing on UI for this. It loads instantly anyway for demo purposes */ }
                { movies && movies.map((movie, i) => <Movie movie={movie} key="i" />) }
            </div>
        )
    }
}

export default connect(
    state => ({
        config: state.moviedb.config,
        error: state.moviedb.error,
        genres: state.moviedb.genres,
        loading: state.moviedb.loading,
        movies: state.moviedb.movies
    }),
    dispatch => ({
        fetchMovies: () => dispatch({ type: 'MOVIE_API_REQUEST' })
    })
)(Movies)