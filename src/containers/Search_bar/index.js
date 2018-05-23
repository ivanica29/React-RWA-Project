import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCity } from '../../reducers/reducer_city';


import './style.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  onInputChange(event) {
    this.setState( { term: event.target.value } );
  }

  onFromSubmit(ev) {
    ev.preventDefault();

    this.props.fetchCity(this.state.term);
    this.setState( { term: ''} );
  }

  render() {
    return(
      <form  onSubmit={(ev) => this.onFromSubmit(ev)} className="input-group">
        <input
          placeholder="Search your favourite city..."
          className="form-control"
          onChange={(ev) => this.onInputChange(ev)}
          />
        <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Search</button>
      </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);