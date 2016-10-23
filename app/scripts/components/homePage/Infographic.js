import React from 'react';

const Infographic = React.createClass({
  render: function () {
    return (
      <section className="infographic-section">
        <figure className="infographic-img">
          <img src="http://placekitten.com/300/300"/>
          <img src="http://placekitten.com/100/100"/>
        </figure>
        <div className="infographic-who-we-are">
          <h2>Why Beehive?</h2>
          <p>At the Better Beehive Project we believe in the power of the Voice. In a beehive each bee has a role to create a strong, collective and more productive beehive.</p>
        </div>
      </section>
    )
  }
});

export default Infographic;
