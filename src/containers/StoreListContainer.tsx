import * as React from 'react';
import { connect } from 'react-redux';

import { StoreList } from '../components/StoreList';

function mapStateToProps (state, ownProps){
  return {
    stores: state.app.locations
  }
}

function mapDispatchToProps (dispatch, ownProps){
  return {};
}

export const StoreListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreList);
