import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBar from '../Search_bar';
import CurrentTemp from '../CurrentTemp';
import StartWeatherList from '../StartWeatherList';

import { Grid, GridRow, GridColumn } from 'semantic-ui-react';

import './style.scss';
import WeatherList from "../WeatherList";

import { fetchStartCity } from '../../reducers/reducer_start_city';

class App extends Component {
  componentDidMount() {
    this.props.fetchStartCity();
  }

  render() {

    const itemForRender = (this.props.weatherFiveDays.length === 0) ? (
      <StartWeatherList />
    ) : (
      <React.Fragment>
        <WeatherList/>
        <CurrentTemp/>
      </React.Fragment>
    );

    return (
    	<div className="bgrd">

        <Grid columns='equal' className="grid">
          <GridRow centered columns={1}>
            <GridColumn/>
              <SearchBar/>
          </GridRow>

          {itemForRender}

        </Grid>
      	</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weatherFiveDays: state.city.weatherFiveDays,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchStartCity
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);