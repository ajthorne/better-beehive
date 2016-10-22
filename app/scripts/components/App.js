import React from 'react';
import Nav from './Nav';
import Landing from './Landing';
import Footer from './Footer';

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


//Add Footer
