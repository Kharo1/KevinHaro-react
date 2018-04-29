import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div class="ui buttons">
          <div class="ui button">One</div>
          <div class="ui button">Two</div>
          <div class="ui button">Three</div>
        </div>
      </header>
    )
  }
}
export default NavBar;