import React, { Component } from "react";

class Child extends React.Component {
    render() {
        return(
            <div>
                <h2>{this.this.props.name}</h2>
                <h2>{this.this.props.price}</h2>
            </div>
        )

    }
    
}


export default Child;