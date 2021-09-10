import React, { Component } from "react";

class Boton extends Component {
  render() {
    return (
      
        <div className="opcion">
          <button id={this.props.nombreBoton} className="botones" onClick={this.props.handleClick}>
             {this.props.nombreBoton}
          </button>
          <h2>{this.props.opcion}</h2>
        </div>

    );
  }
}

export default Boton;