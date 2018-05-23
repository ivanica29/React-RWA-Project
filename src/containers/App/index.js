import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../Search_bar';
import CurrentTemp from '../CurrentTemp';

import { Grid, GridRow, GridColumn } from 'semantic-ui-react';

import './style.scss';
import WeatherList from "../WeatherList";

class App extends Component {
  render() {
    return (
    	<div>

        <Grid columns='equal' className="grid">
          <GridRow centered columns={1}>
            <GridColumn/>
              <SearchBar/>
          </GridRow>

          <WeatherList/>

          <CurrentTemp/>
        </Grid>

      	</div>
    );
  }
}



// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//   }, dispatch);
// }

export default connect(null, null)(App);