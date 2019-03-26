import React, { Component } from 'react';
import './App.css';
import Row from './FilmRow'
import tmdb from './TMDB'

class List extends Component {
    render() {
        let films = tmdb.films.map((film) => {
            return <Row film={film} key={film.id} />
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {films}
            </div>

        );
    }
}

export default List;
