import React, { Component } from 'react';

import './style.scss';

class WeatherItem extends Component {
  constructor(props) {
  super(props);
  }

  render() {
    return(
      <div className="wrapper">
        <div>
          {this.props.day}
        </div>
        <div className="temperature">
          {this.props.celsius} °C
        </div>
        <div>
          {this.props.description.charAt(0).toUpperCase() + this.props.description.slice(1)}
        </div>
      </div>
    );
  }
}

export default (WeatherItem);