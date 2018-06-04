import React, { Component } from 'react';
import {connect} from "react-redux";
import { GridRow, GridColumn } from 'semantic-ui-react';

import StartWeatherItem from '../StartWeatherItem';

class StartWeatherList extends Component {

  renderItems() {

    const cities = ["Belgrade", "London", "Rome", "Berlin"];

    return cities.map( (city, index) => {

      return(
        <GridColumn key={index}>
          <StartWeatherItem name={city} temp={this.props.tempStartCities[index]} desc={this.props.descStartCities[index]} icon={this.props.iconsStartCities[index]}/>
        </GridColumn>
      );
    })
  }

  render() {
    return(
        <GridRow centered columns={5}>
          {this.renderItems()}
        </GridRow>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tempStartCities: state.startCity.tempStartCities,
    descStartCities: state.startCity.descStartCities,
    iconsStartCities: state.startCity.iconsStartCities
  }
};

export default connect(mapStateToProps, null)(StartWeatherList);