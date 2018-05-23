import React, { Component } from 'react';
import { connect } from 'react-redux';

import WeatherItem from '../WeatherItem';

import { GridRow, GridColumn } from 'semantic-ui-react';

class WeatherList extends Component {

  renderItems() {
    if(this.props.fiveDays.length === 0) {
      return;
    }
    return this.props.fiveDays.map( (day) => {
      console.log(day);
      let temp = Math.round(day.main.temp - 273);

      let date = day.dt_txt.split(" ")[0].split("2018-")[1];

      let desc = day.weather[0].description;

      console.log(desc);

      return(
          <GridColumn>
            <WeatherItem celsius={temp} day={date} description={desc} />
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
    fiveDays: state.city.weatherFiveDays
  }
};

export default connect(mapStateToProps, null)(WeatherList);