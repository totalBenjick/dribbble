import React, { Component } from 'react';

class Stats extends Component {
  render() {
    return (
      <div className='shots__stats'>
        <ul className='shots__list'>
          <li><i className='fa fa-eye' />3,827</li>
          <li><i className='fa fa-comment' />17</li>
          <li><i className='fa fa-heart' />323</li>
        </ul>
      </div>
    );
  }
}

export default Stats;
