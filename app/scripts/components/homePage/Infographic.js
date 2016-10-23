import React from 'react';

const Infographic = React.createClass({
  render: function () {
    return (
      <section className="infographic-section">
        <figure className="infographic-img">
          <img id="info-img" src="http://placekitten.com/300/300"/>
          <img id="info-arrow" src="http://placekitten.com/100/100"/>
        </figure>
        <div className="infographic-why">
          <h2>Why Beehive?</h2>
          <p>At the Better Beehive Project we believe in the power of the Voice. In a beehive each bee has a role to create a strong, collective and more productive beehive.</p>
        </div>
      </section>
    )
  }
});

export default Infographic;
