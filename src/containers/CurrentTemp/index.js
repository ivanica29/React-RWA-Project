import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from '../../components/Icon';

import { GridRow, GridColumn } from 'semantic-ui-react';
import './style.scss';
import Chart from "../Chart";

class CurrentTemp extends Component {
  render() {

    if(this.props.iconurl === "") {
      return null;
    }

    return(
      <GridRow centered columns={1}>
        <GridColumn>
          <div className="wrapperCurrent">
            <div className="temperature">
             {this.props.currentTemp} °C
            </div>
            <Icon iconurl={this.props.iconurl}/>
            <div className="infoText">
              {this.props.currentDescription.charAt(0).toUpperCase() + this.props.currentDescription.slice(1)}
            </div>

          </div>

          <Chart/>
        </GridColumn>
      </GridRow>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentTemp: state.city.currentTemp,
    currentDescription: state.city.currentDescription,
    iconurl : state.city.icon
  }
};

export default connect(mapStateToProps, null)(CurrentTemp);