import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import './OlaMundo.css';

export default class OlaMundo extends Component {
  constructor(props){
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      resultado: 0
    };
    this.calcular();
    this.changeNum1.bind(this);
    this.changeNum2.bind(this);
  }

  changeNum1(e) {
    this.setState({ num1: e.target.value });
    this.calcular(e.target.value, this.state.num2);
  }
  
  changeNum2(e) {
    this.setState({ num2: e.target.value });
    this.calcular(e.target.value, this.state.num1);
  }

  calcular(n1, n2){
    this.setState({ resultado: +(n1 || 0) + +(n2 || 0) });
  }

  render() {
    return (
        <div className="titulo">
            <h6>{this.props.titulo}</h6>
            <input name="num1" value={this.state.num1} onChange={(e) => { this.changeNum1(e) }} /><br />
            <input name="num2" value={this.state.num2} onChange={(e) => { this.changeNum2(e) }} /><br />
            <span>R: {this.state.resultado}</span><br />
        </div>
    );
  }

}

OlaMundo.propTypes = {
  titulo: PropTypes.string.isRequired,
  numeroum: PropTypes.number,
  numerodois: PropTypes.number
}