import React, { Component } from 'react';

import Shot from './Shot';

class Shots extends Component {
  render() {
    return (
      <div className='container'>
        <Shot />
        <Shot />
        <Shot />
        <Shot />
        <Shot />
      </div>
    );
  }
}

export default Shots;
