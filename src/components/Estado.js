import React, { Component } from "react";
import Recordatorio from "./Recordatorio";
import Opciones from "./Opciones";

class Estado extends Component {
  
    render() {
        return (
          <div className="layout">
            <h1 className="historia">{this.props.historia}</h1>
            <Opciones
              handleClick={this.props.handleClick}
              opcionA={this.props.opcionA}
              opcionB={this.props.opcionB}
            />
            <Recordatorio
              seleccionPrevia={this.props.seleccionPrevia}
              selecciones={this.props.listaSeleccionPrevia.map(
                (e, index) => (
                  <li key={index}>{e}</li>
                ),
                this.props.id
              )}
            />
          </div>
        );
      }
    }
export default Estado;    