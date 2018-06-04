import React, { Component } from 'react';
import Icon from '../Icon/index';

import './style.scss';

class WeatherItem extends Component {
  constructor(props) {
  super(props);
  }

  render() {
    return(
      <div className="wrapper">
        <div className="info">
          {this.props.day}
        </div>
        <div className="temperature">
          {this.props.celsius} °C
        </div>
        <div className="centered">
          <Icon iconurl={this.props.iconurl}/>
        </div>
        <div className="info">
          {this.props.description.charAt(0).toUpperCase() + this.props.description.slice(1)}
        </div>

      </div>
    );
  }
}

export default (WeatherItem);