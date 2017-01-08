import * as React from 'react';

import {CurrentLocationContainer} from '../containers/CurrentLocationContainer';
import {StoreListContainer} from '../containers/StoreListContainer';

interface IProps {}

interface IState {}

export class Main extends React.Component <IProps, IState> {
  props: IProps;

  constructor(props: IProps, state: IState){
    super();
  }

  render(){
    return (
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-xs-12 col-sm-12 col-md-12">
              <CurrentLocationContainer />
              <StoreListContainer />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
