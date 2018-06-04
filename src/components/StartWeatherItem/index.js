import React, { Component } from 'react';

import Icon from '../Icon/index';

import './style.scss';

class StartWeatherItem extends Component {
 render() {
   return(
     <div className="wrapper-start">
       <div className="city-name">
         {this.props.name}
       </div>
       <div className="temperature">
         {this.props.temp} °C
       </div>
       <div className="centered">
         <Icon iconurl={this.props.icon}/>
       </div>
     </div>
   );
 }
}

export default (StartWeatherItem);