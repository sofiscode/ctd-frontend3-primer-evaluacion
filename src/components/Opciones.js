import React, { Component } from "react";
import Boton from "./Boton";

class Opciones extends Component {
  render() {
    return (
      <div className="opciones">
        <Boton 
         handleClick={this.props.handleClick}
         opcion={this.props.opcionA}
         nombreBoton="A"
        />
        <Boton 
         handleClick={this.props.handleClick}
         opcion={this.props.opcionB}
         nombreBoton="B" 
        />
      </div>
    );
  }
}

export default Opciones;