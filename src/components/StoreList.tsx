import * as React from 'react';
import {CafeLocation} from '../reducers/app';

import {Store} from './Store';

interface IProps {
  stores: CafeLocation[]
}

interface IState {}

export class StoreList extends React.Component <IProps, IState> {
  constructor(props: IProps, state: IState){
    super(props);
  }

  render(){
    return (
      <div className="container-fluid">
        {
          this.props.stores.slice(0, 9).map((store, i)=>{
            return <Store store={store} key={i}/>
          })
        }
      </div>
    );
  }
}
