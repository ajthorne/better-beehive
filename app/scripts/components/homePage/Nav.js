import React from 'react';

const Nav = React.createClass({
  render: function() {
    return (
      <nav>
        <li><a href="/">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">BuzzPoints</a></li>
        <li><a href="#">Contact</a></li>
      </nav>
    )
  }
})

export default Nav;
