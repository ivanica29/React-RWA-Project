import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import { incrementCounter, decrementCounter } from '../../reducers/counter';

import './style.scss';

class App extends Component {
  render() {
    return (
    	<div>
      		<div className="custom">{this.props.currentCounter}</div>
      		<Button color="primary" onClick={this.props.incrementCounter.bind(this)}>Increase</Button>	
      		<Button color="danger" onClick={this.props.decrementCounter.bind(this)}>Decrease</Button>	
      	</div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		currentCounter: state.counter.currentNumber
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  	incrementCounter,
  	decrementCounter
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);