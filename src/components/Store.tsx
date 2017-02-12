import * as React from 'react';
import {CafeLocation} from '../reducers/app';
import {HoursDisplay} from './HoursDisplay';
import * as round from 'lodash/round';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
          <MuiThemeProvider>
             <Card>
              <CardHeader 
                title={this.props.store.name}
                subtitle={this.props.store.address + " " + round(this.props.store.distance, 1) + "kms"}></CardHeader>
              <CardMedia>
                <iframe frameBorder="0" style={iframeStyle}
                  src={mapUrl}></iframe>
              </CardMedia>
              <CardText>
                {displayHours && <HoursDisplay hours={this.props.store.hours}/>}
              </CardText>
             </Card>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
