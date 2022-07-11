import React from "react"

class Button extends React.Component {
    render(){
        return(
            <button><a href={this.props.href}>{this.props.fname}</a></button>
        )
    }
}

export default Button