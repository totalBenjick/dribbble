import React, { Component } from 'react';

import Cover from './Cover';
import Stats from './Stats';

class Shot extends Component {
  render() {
    return (
      <article className='shot'>
        <Cover />
        <Stats />
      </article>
    );
  }
}

export default Shot;
