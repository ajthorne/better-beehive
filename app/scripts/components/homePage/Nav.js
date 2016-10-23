import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
  render: function() {
    return (
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="#">About</Link></li>
        <li><a href="https://medium.com/@BetterBeehive/">Buzz Blog</a></li>
        <li><Link to="#">Contact</Link></li>
      </nav>
    )
  }
})

export default Nav;
