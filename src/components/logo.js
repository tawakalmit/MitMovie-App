import React from "react"
import Image from "./../img/logo.png"

class Logo extends React.Component {
    render(){
        return(
        <div class="logo">
            <img src={Image} alt="logo" />
            <p>MitMovie App</p>
        </div>
        )
    }
}

export default Logo