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
            config,
            movie
        } = this.props

        const base_url = config && config.images.base_url

        return (
            <li className="Movie">
                { base_url && <picture>
                    <source srcSet={base_url + '/w92/' + movie.poster_path} media="(max-width: 500px)" />
                    <source srcSet={base_url + '/w185/' + movie.poster_path} />
                    <img className="Movie__Poster__Image" src={base_url + '/w185/' + movie.poster_path} alt={'Poster of ' + movie.title + ' movie'} />
                </picture> }
                <h2 className="Movie__Title">{movie.title}</h2>
            </li>
        )
    }
}

export default Movie