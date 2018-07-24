import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './Movies.css'

// A component that allow to filter movie listing by minimum rating
class MovieRatingFilter extends PureComponent {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.setMinRating(event.target.value)
    }

    render() {
        const {
            minRating
        } = this.props

        return (
            <div className="MovieRatingFilter">
                <label htmlFor="MovieRatingFilter" className="MovieRatingFilter__Label">Minimum rating:</label>
                <input className="MovieRatingFilter__Input" type="number" name="minRating" value={minRating} step="0.5" min="0" max="10" id="MovieRatingFilter" onChange={this.handleChange} />
            </div>
        )
    }
}

export default connect(
    state => ({
        minRating: state.moviedb.minRating
    }),
    dispatch => ({
        setMinRating: (minRating) => dispatch({ type: 'MOVIE_SET_MIN_RATING', minRating })
    })
)(MovieRatingFilter)