import * as React from 'react';
import {CafeLocation} from '../reducers/app';

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
      'border': '0'
    };

    let mapUrl = '';

    if (this.props.store.latitude !== 0){
      mapUrl = `https://www.google.com/maps/embed/v1/place?q=${this.props.store.latitude}%2C%20${this.props.store.longitude}&key=AIzaSyBfQiuNkny6qftAKK3ZxRexheF6YPke0v0`
    }

    return (
      <div className="row" style={blockStyle}>
        <div className="col-xs-12">

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
              Name:
            </div>
            <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
              {this.props.store.name}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
              Address:
            </div>
            <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
              {this.props.store.address}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
              Co-ordinates:
            </div>
            <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
              {this.props.store.latitude}, {this.props.store.longitude}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
              Distance
            </div>
            <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
              {this.props.store.distance}kms
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 col-lg-offset-4 col-xs-12 text-center">
              <iframe width="600" height="450" frameBorder="0" style={iframeStyle}
                src={mapUrl}></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
