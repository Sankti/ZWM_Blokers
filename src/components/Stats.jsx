import React, { Component } from "react";
import { connect } from "react-redux";
import { data } from '../data'

class Stats extends Component {
  render() {
    return (
      <>
        <div>
        <svg width="100" height="50">
          <rect x="0" y="0" width="100" height="50" stroke="#660000" stroke-width="3px" fill="red"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            {this.props.health} {data.stats.healthName}
          </text>
        </svg>
        <svg width="100" height="50">
          <rect x="0" y="0" width="100" height="50" stroke="#145214" stroke-width="3px" fill="#33cc33"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            {this.props.money} {data.stats.currency}
          </text>
        </svg>
          <h1>{this.props.health}</h1>
          <button onClick={this.props.healthUp}>UP</button>
          <button onClick={this.props.healthDown}>DOWN</button>
          <button onClick={this.props.moneyUp}>$ UP</button>
          <button onClick={this.props.moneyDown}>$ DOWN</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    health: state.health,
    money: state.money,
  };
};

const mapDispachToProps = dispatch => {
  return {
    healthUp: () => dispatch({ type: "HEALTH_UP"}),
    healthDown: () => dispatch({ type: "HEALTH_DOWN"}),
    moneyUp: () => dispatch({type: "MONEY_UP"}),
    moneyDown: () => dispatch({type: "MONEY_DOWN"}),
  };
};

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Stats);