import React, { Component } from 'react';

import EloadasokList from '../containers/eloadasok_list';
import EloadasDetail from '../containers/eloadas_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <EloadasokList />
        <EloadasDetail />
      </div>
    );
  }
}
