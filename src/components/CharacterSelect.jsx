import React, { Component } from "react";
import { connect } from "react-redux";

class CharacterSelect extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          <p>Ziomek z ZWM-u</p>
          <p>Siła: {this.props.strength}</p>
          <p>Intelekt: {this.props.intellect}</p>
          <p>Charyzma: {this.props.charisma}</p>
        </div>
        <p>Wybierz klasę ziomka:</p>
        <button onClick={this.props.selectKnight}>Rycerz Ortalionu</button>
        <button onClick={this.props.selectHacker}>Programista</button>
        <button onClick={this.props.selectRapper}>Raper</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    strength: state.strength,
    intellect: state.intellect,
    charisma: state.charisma,
  };
};

const mapDispachToProps = dispatch => {
  return {
    selectKnight: () => dispatch({ type: "SELECT_KNIGHT"}),
    selectHacker: () => dispatch({ type: "SELECT_HACKER"}),
    selectRapper: () => dispatch({ type: "SELECT_RAPPER"}),
  };
};

export default connect(
    mapStateToProps,
    mapDispachToProps
)(CharacterSelect);