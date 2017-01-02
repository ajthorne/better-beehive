import React from 'react';
import {browserHistory, Link} from 'react-router';

const Hero = React.createClass({
  searchHandler: function (e) {
    e.preventDefault();
    let businessType = document.getElementById('business-type').value;
    browserHistory.push(`/search/type=${businessType}`);
  },
  render: function () {
    return (
      <section className="hero">
        <figure><img id="logo-img" src="../../../assets/images/bbp-finals-02.png"/></figure>
        <div className="buzz-or-sting">
          <figure><Link to="/buzz"><img src="../../../assets/images/bbp-03.png"/></Link></figure>
          <figure><Link to="/sting"><img src="../../../assets/images/bbp-04.png"/></Link></figure>
        </div>
        <form onSubmit={this.searchHandler} className="search-field">
         <input name="search" type="Search"/>
         <select id='business-type' ref='type' onChange={this.handleChange}>
             <option>Search</option>
             <option ref="medical" id="0" value='medical'>Medical</option>
             <option ref="social" id="1" value='social'>Social</option>
             <option ref="school" id="2" value='school'>School</option>
          </select>
          <button onClick={this.searchHandler}>Submit</button>
        </form>
      </section>
    )
  }
});

export default Hero;

// <h1>Better <span>Beehive</span> Project</h1>


// <input className="search-field" type="checkbox" id="medical" value="medical"/><label>Medical</label>
// <input className="search-field" type="checkbox" id="social" value="social"/><label>Social</label>
// <input className="search-field" type="checkbox" id="school" value="school"/><label>School</label>
// let businessType = document.querySelector('.search-field:checked').value;
