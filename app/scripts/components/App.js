import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = React.createClass({
  render: function () {
    return (
     <section className="main-content">
        <Nav/>
        {this.props.children}
        <Footer/>
      </section>
    )
  }
});

export default App;
