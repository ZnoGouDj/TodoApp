import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  state = {
    toggle: [
      { name: 'All', active: true, id: 1 },
      { name: 'Active', active: false, id: 2 },
      { name: 'Done', active: false, id: 3 }
    ]
  }

  onSwitch = (e) => {
    


  }

  render() {
    return (
      <form className="btn-group" onClick={this.onSwitch}>
        <button type="button"
          className="btn btn-info" >All</button>
        <button type="button"
          className="btn btn-outline-secondary">Active</button>
        <button type="button"
          className="btn btn-outline-secondary">Done</button>
      </form>
    );
  }
}