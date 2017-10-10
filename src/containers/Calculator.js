import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onButtonPressed } from '../actions';
import './Calculator.css';

import { Display } from '../components/';
import InputPanel from './input_panel/input_panel';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator d-flex flex-column">
        <Display ans={this.props.ans} current={this.props.current} />
        <InputPanel onButtonPressed={this.props.onButtonPressed} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ans: state.display.ans,
    current: state.display.current
  };
};

export default connect(mapStateToProps, { onButtonPressed })(Calculator);
