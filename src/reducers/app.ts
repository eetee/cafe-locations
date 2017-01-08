import {locations as storeLocations} from '../data/locations';
import {actions} from '../actions/actions';
import { combineReducers } from 'redux';

export interface CafeLocation {
  name: string;
  address: string;
  type: string;
  longitude: number;
  latitude: number;
  position: string;
  distance: number;
}

export interface IState {
  locations: CafeLocation[],
  currentLocation: {
    longitude: number;
    latitude: number;
  }
}

export const initialState:IState = {
  locations: storeLocations.map((location)=>{
    return {
      name: location[1],
      address: location[0],
      type: location[2],
      longitude: parseFloat(location[4]),
      latitude: parseFloat(location[3]),
      position: location[5],
      distance: 0
    }
  }),
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
