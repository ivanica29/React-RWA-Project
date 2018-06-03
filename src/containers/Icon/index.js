import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';

class Icon extends Component {
  render() {
    return(
      <div>
        {/*<i className="wi wi-day-sunny wi-flip-vertical"/>*/}
        <img src={this.props.iconurl} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

export default connect(mapStateToProps, null)(Icon);