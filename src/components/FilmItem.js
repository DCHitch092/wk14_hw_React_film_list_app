import React, {Component} from 'react';

class FilmItem extends Component{
    render(){
        return (
            <main>
            <a href={this.props.link}><h2>{this.props.title}</h2></a>
    <p>{this.props.director}, {this.props.year}</p>
            </main>
        )
    }
}

export default FilmItem;