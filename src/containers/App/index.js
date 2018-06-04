import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBar from '../Search_bar';
import CurrentTemp from '../CurrentTemp';
import StartWeatherList from '../StartWeatherList';

import { Grid, GridRow, GridColumn, Button } from 'semantic-ui-react';

import WeatherList from "../WeatherList";

import './style.scss';

import { fetchStartCity } from '../../reducers/reducer_start_city';
import { clearWeather } from '../../reducers/reducer_city';

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
          <GridRow centered columns={2} className="first-row">

            <GridColumn >
              <SearchBar/>
            </GridColumn>

            <GridColumn>
              {this.props.weatherFiveDays.length !== 0 && (<Button onClick={() => this.props.clearWeather()} primary>
                Back
              </Button>)}
            </GridColumn>
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
    fetchStartCity,
    clearWeather
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);