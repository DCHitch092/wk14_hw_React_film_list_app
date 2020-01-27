import React, {Component} from 'react';
import FilmItem from './FilmItem';

class FilmList extends Component {
    render(){

        const filmNodes = this.props.data.map(film => {
            return (
                <FilmItem
                className="film-item"
                title={film.title}
                director={film.director}
                link={film.link}
                year={film.year}
                 
                key={film.id}>
            
                </FilmItem>
                
            )
        })


        return (
            <>
            <h2>This is the list of the films</h2>
            {filmNodes}
            </>
        )
    }
}

export default FilmList;