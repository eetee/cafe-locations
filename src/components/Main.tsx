import * as React from 'react';

import {CurrentLocationContainer} from '../containers/CurrentLocationContainer';
import {StoreListContainer} from '../containers/StoreListContainer';
import {CurrentTimestamp} from './CurrentTimestamp';

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
              <p>
                More details here: <a href="https://github.com/eetee/supreme-locations">https://github.com/eetee/supreme-locations</a><br />
                <small>Source code, potential enhancements etc.</small>
              </p>
              <p>
                Disclaimer: I have no affiliation to the roaster, they have neither commissioned this nor is there any endorsement.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-xs-12 col-sm-12 col-md-12">
              <CurrentTimestamp />
              <CurrentLocationContainer />
              <StoreListContainer />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
