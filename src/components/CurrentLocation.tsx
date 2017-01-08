import * as React from 'react';

interface IProps {
  longitude: string;
  latitude: string;
}

interface IState {}

export class CurrentLocation extends React.Component <IProps, IState> {
  constructor(props: IProps, state: IState){
    super(props);
  }

  render(){
    return (
      <div className="row">
        <div className="col-lg-12">
          Current Location: {this.props.latitude}, {this.props.longitude}
        </div>
      </div>
    );
  }
}
