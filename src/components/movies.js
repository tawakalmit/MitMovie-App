import React from "react"
import Godfather from "./../img/godfather.png"
import StrangerThings from "./../img/stranger-things.png"
import InventingAnna from "./../img/inventing-anna.png"
import MoneyHeist from "./../img/money-heist.png"
import OnePiece from "./../img/onepiece.png"
import Peacemaker from "./../img/peacemaker.png"
import ResidentEvil from "./../img/resident-evil.png"
import SavingPrivateRyan from "./../img/saving-private-ryan.png"
import WolfOfWallstreet from "./../img/wolf-of-wallstreet.png"
import MovieList from "./movieItem"

class Movies extends React.Component{
    render(){
        return(
            <div className="movies" id="movie">
                <h2>Our Movies</h2>
                <div className="movie-list">
                    <MovieList mov={Godfather} title="The Godfather" year="1975" />
                    <MovieList mov={StrangerThings} title="Stranger Things" year="2022" />
                    <MovieList mov={InventingAnna} title="Inventing Anna" year="2022" />
                    <MovieList mov={MoneyHeist} title="Money Heist" year="2022" />
                    <MovieList mov={OnePiece} title="One Piece Red" year="2022" />
                    <MovieList mov={Peacemaker} title="Peacemaker" year="2022" />
                    <MovieList mov={ResidentEvil} title="Resident Evil : Infinite Darkness" year="2021" />
                    <MovieList mov={SavingPrivateRyan} title="Saving Private Ryan" year="1985" />
                    <MovieList mov={WolfOfWallstreet} title="Wolf Of Wallstreet" year="2013" />
                </div>
            </div>
        )
    }
}

export default Movies