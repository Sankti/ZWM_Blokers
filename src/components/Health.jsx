import React, { Component } from "react";
import { connect } from "react-redux";

class Health extends Component {
  render() {
    return (
        <>
            <div>
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