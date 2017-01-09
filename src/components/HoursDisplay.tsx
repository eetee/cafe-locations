import * as React from 'react';
import {CafeHours} from '../reducers/app';

interface IProps {
  hours: CafeHours
}

interface IState {}

export class HoursDisplay extends React.Component <IProps, IState> {
  constructor(props: IProps, state: IState){
    super(props);
  }

  render(){
    const formatHoursString = (hours: string[][]) =>{
      if (!hours) return '';

      return hours.map((dayHours:string[])=>{
        return dayHours.join(' - ');
      }).join(', ');
    };

    const pStyle = {
      'margin': '0 0 3px 0'
    }

    return (
      <div>
        <p style={pStyle}>Sat: {formatHoursString(this.props.hours.sat)}</p>
        <p style={pStyle}>Sun: {formatHoursString(this.props.hours.sun)}</p>
        <p style={pStyle}>Mon: {formatHoursString(this.props.hours.mon)}</p>
        <p style={pStyle}>Tue: {formatHoursString(this.props.hours.tue)}</p>
        <p style={pStyle}>Wed: {formatHoursString(this.props.hours.wed)}</p>
        <p style={pStyle}>Thu: {formatHoursString(this.props.hours.thu)}</p>
        <p style={pStyle}>Fri: {formatHoursString(this.props.hours.fri)}</p>
      </div>
    );
  }
}
