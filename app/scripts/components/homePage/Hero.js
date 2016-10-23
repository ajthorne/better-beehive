import React from 'react';
import {browserHistory, Link} from 'react-router';

const Hero = React.createClass({
  searchHandler: function (e) {
    e.preventDefault();
    let businessType = document.querySelector('.search-field:checked').value;
    browserHistory.push(`/search/type=${businessType}`);
  },
  render: function () {
    return (
      <section className="Hero">
        <h1>Better Beehive Project</h1>
        <figure><Link to="/buzz"><img src="http://placekitten.com/100/100"/></Link></figure>
        <figure><Link to="/sting"><img src="http://placekitten.com/100/100"/></Link></figure>
        <form onSubmit={this.searchHandler} className="search-field">
          <input className="search-field" type="checkbox" id="medical" value="medical"/><label>Medical</label>
          <input className="search-field" type="checkbox" id="social" value="social"/><label>Social</label>
          <input className="search-field" type="checkbox" id="school" value="school"/><label>School</label>
          <input type="submit" value="submit"/>
        </form>
      </section>
    )
  }
});

export default Hero;

// <input type='text' list='business-type'/>
// <datalist id='business-type' ref='type'>
//   <option label='medical' ref="0" id="0" value='Medical'/>
//   <option label='social' ref="1" id="1" value='Social'/>
//   <option label='school' ref="2" id="2" value='School'/>
// </datalist>
