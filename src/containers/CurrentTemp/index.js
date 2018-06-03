import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from '../Icon';

import { GridRow, GridColumn } from 'semantic-ui-react';
import './style.scss';

class CurrentTemp extends Component {
  render() {

    return(
      <GridRow centered columns={1}>
        <GridColumn>
          <div className="wrapperCurrent">
            <div className="temperature">
             {this.props.currentTemp}
            </div>
            <Icon iconurl={this.props.iconurl}/>
            <div className="infoText">
              {this.props.currentDescription.charAt(0).toUpperCase() + this.props.currentDescription.slice(1)}
            </div>

          </div>

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