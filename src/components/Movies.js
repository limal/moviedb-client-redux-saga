import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './Movies.css'

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
            error,
            loading,
            movies
        } = this.props

        return (
            <div className="Movies">
                Movies
                <code>
                    <pre>
                        loading: { loading ? 'true' : 'false' }

                        error: { JSON.stringify(error) }

                        config: { JSON.stringify(config) }
                        genres: { JSON.stringify(genres) }
                        movies: { JSON.stringify(movies) }
                    </pre>
                </code>
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