import * as React from 'react';

import * as moment from 'moment-timezone';

interface IProps {}
interface IState {
  now: string;
}

export class CurrentTimestamp extends React.Component <IProps, IState> {
  constructor(props: IProps, state: IState){
    super(props);

    this.state = {
      now: moment().tz('PACIFIC/AUCKLAND').format('dddd Do MMMM, h:mm a')
    }
  }

  render(){
    return (
      <div className="row">
        <div className="col-lg-12">
          Now: {this.state.now}
        </div>
      </div>
    );
  }
}
