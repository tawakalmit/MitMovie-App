import React from "react"
import Button from "./button"

class MovieList extends React.Component {
    render(){
        return(
            <div className="movie-list-item">
                <img src={this.props.mov} alt="movie list" />
                <h3>{this.props.title}</h3>
                <p>{this.props.year}</p>
                <Button fname="Watch Now" />
            </div>
        )
    }
}

export default MovieList