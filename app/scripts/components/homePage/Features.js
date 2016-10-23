import React from 'react';
import Hero from './Hero';
import Infographic from './Infographic';
import Quote from './Quote';
import About from './About';
import Footer from './Footer';

const Features = React.createClass({
  render: function () {
    return (
      <section className="features-container">
        <Hero />
        <Infographic />
        <Quote />
        <About />
        <Footer/>
      </section>
    )
  }
});

export default Features;
