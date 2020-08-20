import React, { Component } from "react";
import { connect } from "react-redux";

class Attributes extends Component {
  render() {
    return (
        <>
            <div>
                <p>Siła: {this.props.strength}</p>
                <p>Intelekt: {this.props.intellect}</p>
                <p>Charyzma: {this.props.charisma}</p>
            </div>
        </>
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

export default connect(
    mapStateToProps
)(Attributes);