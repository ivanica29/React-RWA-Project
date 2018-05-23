import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GridRow, GridColumn } from 'semantic-ui-react';

class CurrentTemp extends Component {
  render() {
    return(
      <GridRow centered columns={1}>
        <GridColumn>
        {this.props.currentTemp}
        </GridColumn>
      </GridRow>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  currentTemp: state.city.currentTemp
  }
};

export default connect(mapStateToProps, null)(CurrentTemp);