import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Poster from './FilmPoster'

class List extends Component {
    render() {
        let movieDate = new Date(this.props.film.release_date);
        movieDate = movieDate.getFullYear();
        return (
            <div className="film-row">
                <Poster poster={this.props.film.poster_path} />

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{movieDate}</p>
                </div>
            </div>

        );
    }
}

export default List;
