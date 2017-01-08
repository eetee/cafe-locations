const storeLocations = require('../data/supreme');
import {actions} from '../actions/actions';
import { combineReducers } from 'redux';

export interface CafeHours {
  // array of start and end time arrays
  // e.g. sun: [['0900', '1300'], ['1900', '2359']]
  sun: string[][],
  mon: string[][],
  tue: string[][],
  wed: string[][],
  thu: string[][],
  fri: string[][],
  sat: string[][],
}

export interface CafeLocation {
  name: string;
  address: string;
  type: string;
  longitude: number;
  latitude: number;
  position: string;
  distance: number;
  hours: CafeHours
}

export interface IState {
  locations: CafeLocation[],
  currentLocation: {
    longitude: number;
    latitude: number;
  }
}

export const initialState:IState = {
  locations: storeLocations,
  currentLocation: {
    longitude: 123,
    latitude: 456
  }

}

function app (state:IState, action:any) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case actions.SET_CURRENT_LOCATION:
      return Object.assign({}, state, {
        currentLocation: action.currentLocation,
        locations: action.stores
      })
  }


  return state;
}

export const rootReducer = combineReducers({
  app
});
