import React, { PureComponent } from 'react'
import './Movies.css'

class Movie extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        const {
            movie
        } = this.props

        return (
            <div className="Movie">
                { movie.id } : { movie.title }
            </div>
        )
    }
}

export default Movie