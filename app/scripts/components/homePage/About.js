import React from 'react';


const About = React.createClass({
  render: function () {
    return (
      <section className="about-section">
        <div className="about-copy">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <figure className="about-pic">
          <img src="http://placekitten.com/400/400"/>
        </figure>
      </section>
    )
  }
});

export default About;
