import React from 'react';
import Nav from './homePage/Nav';
// import Footer from './homePage/Footer';

const App = React.createClass({
  render: function () {
    return (
     <section className="main-content">
        <Nav/>
        {this.props.children}
      </section>
    )
  }
});

export default App;
