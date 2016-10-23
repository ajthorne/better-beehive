import React from 'react';


const About = React.createClass({
  render: function () {
    return (
      <section className="about-section">
        <div className="about-copy">
          <h1>Who We Are...</h1>
          <p>Founder, Veronica Martinez, by day is a parent liaison for a social services government agency and by day, night and 24/7 is a mother of two, one of whom has special needs. In both professional and personal life Veronica identified the need for our society to recognize and appreciate institutions that purposefully build their business model on the values of Accessibility, Empowerment and Inclusion of the special needs community.</p>
        </div>
        <figure className="about-pic">
          <img src="../../../assets/images/bbp-founder.jpeg"/>
        </figure>
      </section>
    )
  }
});

export default About;
