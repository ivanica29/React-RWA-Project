import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';

class Icon extends Component {
  render() {
    return(
      <div>
        <img src={this.props.iconurl} />
      </div>
    );
  }
}

export default connect(null, null)(Icon);