import React, { Component } from "react";
import { connect } from "react-redux";

class Location extends Component {
  render() {
    return (
        <>
            <div>
                <p>Lokacja: {this.props.location}</p>
            </div>
        </>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.location,
  };
};

export default connect(
    mapStateToProps
)(Location);