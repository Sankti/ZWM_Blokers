import React, { Component } from "react";
import { connect } from "react-redux";

class Health extends Component {
  render() {
    return (
      <>
        <div>
        <svg width="200" height="100">
          <rect x="0" y="0" width="200" height="100" stroke="red" stroke-width="3px" fill="white"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">{this.props.health}</text>    
        </svg>
          <h1>{this.props.health}</h1>
          <button onClick={this.props.healthUp}>UP</button>
          <button onClick={this.props.healthDown}>DOWN</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    health: state.health,
  };
};

const mapDispachToProps = dispatch => {
  return {
    healthUp: () => dispatch({ type: "HEALTH_UP"}),
    healthDown: () => dispatch({ type: "HEALTH_DOWN"})
  };
};

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Health);