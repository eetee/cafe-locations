import * as React from 'react';
import { connect } from 'react-redux';

import { CurrentLocation } from '../components/CurrentLocation';

function mapStateToProps (state, ownProps){
  return {
    longitude: state.app.currentLocation.longitude,
    latitude: state.app.currentLocation.latitude
  }
}

function mapDispatchToProps (dispatch, ownProps){
  return {};
}

export const CurrentLocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentLocation);
