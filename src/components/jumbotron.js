import React from "react"
import Image from "./../img/logo.png"
import Button from "./button.js"

class Jumbotron extends React.Component{
    render(){
        return (
            <div class="jumbotron">
                <img src={Image} alt="logo" />
                <p>Welcome to MitMovie</p>
                <h1>STREAMING FILMS FEATURE,</h1>
                <h1>TELEVISION & GAMES</h1>
                <Button href="#movie" fname="Browse Movie" />
            </div>
        )
    }
}

export default Jumbotron