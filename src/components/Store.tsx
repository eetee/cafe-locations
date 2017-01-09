import * as React from 'react';
import {CafeLocation} from '../reducers/app';
import {HoursDisplay} from './HoursDisplay';
import * as round from 'lodash/round';

interface IProps {
  store: CafeLocation
}

interface IState {}

export class Store extends React.Component <IProps, IState> {
  constructor(props: IProps, state: IState){
    super(props);
  }

  render(){
    const blockStyle = {
      'margin': '10px 0px',
      'borderBottom': '1px solid black',
      'padding': '5px'
    };

    const iframeStyle = {
      'border': '0',
      'width': '100%',
      'height': '350px',
    };

    const displayHours = !!this.props.store.hours.sun;

    let mapUrl = '';
    const addressString = this.props.store.address.replace(' ', '+');

    if (this.props.store.latitude !== 0){
      mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBfQiuNkny6qftAKK3ZxRexheF6YPke0v0&q=${addressString}`;
    }

    return (
      <div className="row" style={blockStyle}>
        <div className="col-xs-12">

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h4>{this.props.store.name}</h4>
              <p>{this.props.store.address}</p>
              <p>{round(this.props.store.distance, 1)}kms ({this.props.store.latitude}, {this.props.store.longitude})</p>
              {displayHours && <HoursDisplay hours={this.props.store.hours}/>}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <iframe frameBorder="0" style={iframeStyle}
              src={mapUrl}></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
