import React from 'react';
import {browserHistory} from 'react-router';

const Landing = React.createClass({
  searchHandler: function (e) {
    e.preventDefault();
    console.log('hi');
    browserHistory.push('/search');
  },
  render: function () {
    return (
      <section className="Landing">
        <h1>Better Beehive Project</h1>
        <h3>Creating A Buzz Around Our Needs</h3>
        <div><a href="/buzz">Image for Buzz</a></div>
        <div><a href="/sting">Image for Sting</a></div>
        <form onSubmit={this.searchHandler} className="search-field">
          <input type='text' list='business-type'/>
          <datalist id='business-type'>
            <option label='medical' value='Medical'/>
            <option label='social' value='Social'/>
            <option label='school' value='School'/>
          </datalist>
          <input type="submit" value="submit"/>
        </form>
        <h4><span>"</span>Revolutionary space to have our voices heard. We recognize entities in our community that value accessibility, empowerment and inclusion (AEI) for all. The possibilities are endless.<span>"</span>"</h4>
      </section>
    )
  }
});

export default Landing;
