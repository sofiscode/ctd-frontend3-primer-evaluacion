import React, { Component } from "react";
import Estado from "./Estado";
import data from "./data";

const selecciones = [];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      seleccionPrevia: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      selecciones.push(this.state.seleccionPrevia);
    }
  }

  handleClick = (e) => {
    const id = e.target.id;
    
  
    if (this.state.contador >= 7) {
      alert("Fin.");
    } else if (id === "A" && this.state.contador === 0) {
      this.setState({
        contador: this.state.contador + 1,
        seleccionPrevia: "A",
      });
    } else if (id === "B" && this.state.contador === 0) {
      this.setState({
        contador: this.state.contador + 2,
        seleccionPrevia: "B",
      });
    } else if (id === "A" && this.state.seleccionPrevia === "A") {
      this.setState({
        contador: this.state.contador + 2,
        seleccionPrevia: "A",
      });      
    } else if (id === "B" && this.state.seleccionPrevia === "A") {
      this.setState({
        contador: this.state.contador + 3,
        seleccionPrevia: "B",
      });
    } else if (id === "A" && this.state.seleccionPrevia === "B") {
      this.setState({
        contador: this.state.contador + 1,
        seleccionPrevia: "A",
      });
    } else if(id === "B" && this.state.seleccionPrevia === "B") {   
      this.setState({
        contador: this.state.contador + 2,
        seleccionPrevia: "B",
      });
    }
  };

  render() {
    return (
      <Estado
      historia = {data[this.state.contador].historia}
      handleClick={this.handleClick}
      opcionA ={data[this.state.contador].opciones.a}
      opcionB ={data[this.state.contador].opciones.b}
      seleccionPrevia={this.state.seleccionPrevia}
      listaSeleccionPrevia={selecciones}
      id = {data[this.state.contador].id}
      />
    );
  }
}

export default Main;
