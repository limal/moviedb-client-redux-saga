import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './Movies.css'

// A component that allow to filter movie listing by its genres
class MovieGenreFilter extends PureComponent {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event, genreId) {
        this.props.changeFilterGenres(genreId, event.target.checked)
    }

    render() {
        const {
            filterGenres,
            genres
        } = this.props

        return (
            <div className="MovieGenreFilter">
                { genres && genres.map((genre, i) => (
                    <label key={i} className="MovieGenreFilter__Genre__Label">
                        {genre.name}
                        <input name={genre.id} className="MovieGenreFilter__Genre__Input" type="checkbox" checked={filterGenres.find(id => id === genre.id)} onChange={(event) => this.handleChange(event, genre.id)} />
                    </label>)) }
            </div>
        )
    }
}

export default connect(
    state => ({
        filterGenres: state.moviedb.filterGenres,
        genres: state.moviedb.genres
    }),
    dispatch => ({
        changeFilterGenres: (genreId, checked) => dispatch({ type: 'MOVIE_CHANGE_FILTER_GENRE', genreId, checked })
    })
)(MovieGenreFilter)