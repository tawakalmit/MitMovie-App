import React from "react"

class Link extends React.Component {
    render(){
        return(
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Merchandise</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        )
    }
}

export default Link