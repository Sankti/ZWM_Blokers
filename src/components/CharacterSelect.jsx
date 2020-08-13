import React, { Component } from "react";
import { connect } from "react-redux";
import { data } from '../data';

class CharacterSelect extends Component {
  render() {
    return (
      <>
        <div>
          <img className="avatar" src={data.classes.knight.avatar} alt="" />
          <br />
          <button onClick={this.props.selectKnight}>{data.classes.knight.name}</button>
        </div>
        <div>
          <img className="avatar" src={data.classes.hacker.avatar} alt="" />
          <br />
          <button onClick={this.props.selectHacker}>{data.classes.hacker.name}</button>
        </div>
        <div>
          <img className="avatar" src={data.classes.rapper.avatar} alt="" />
          <br />
          <button onClick={this.props.selectRapper}>{data.classes.rapper.name}</button>
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