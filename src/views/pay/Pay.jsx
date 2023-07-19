import React, { Component } from 'react'
//para escrever a base desse codigo digitar "rcc"
//para acessar as funções do meu Component faço crtl + space
export default class Pay extends Component {
    //AQUI VAI A LÓGICA
    state={
        count:1, //
    }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={()=>{this.setState({count: this.state.count +1})}} >Aumenta</button>
        <ul>{this.props.lista.map(fruta => (
        <li>{fruta}</li>
        ))}</ul>
      </div>
    )
  }
}
