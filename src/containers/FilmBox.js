import React, {Component} from 'react';
import FilmList from '../components/FilmList';


class FilmBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    title: "Wall-E",
                    director: "Andrew Stanton",
                    year: 2008,
                    link: "https://www.pixar.com/feature-films/walle"
                },
                
                {
                    id: 2,
                    title: "Coco",
                    director: "Lee Unkrich, Adrian Molina",
                    year: 2017,
                    link: "https://www.pixar.com/feature-films/coco"
                },

                {
                    id: 3,
                    title: "My Neighbour Totoro",
                    director: "Hayao Miyazaki",
                    year: 1988,
                    link: "ghibli"
                }

            ]
        }
    }
    render(){
        return (
            <>
            <FilmList className="film-list" data={this.state.data}></FilmList>
            </>
        )
    }
}

export default FilmBox;