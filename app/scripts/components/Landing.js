import React from 'react';

const Landing = React.createClass({
  submitHandler: function () {
    console.log('hi');
  },
  render: function () {
    return (
      <section className="Landing">
        <h1>Better Beehive Project</h1>
        <h3>Creating A Buzz Around Our Needs</h3>
        <div><a href="/buzz">Image for Buzz</a></div>
        <div><a href="/sting">Image for Sting</a></div>
        <form onClick={this.submitHandler} className="search-field">
          <label><input type="checkbox" id="medical"/>Medical</label>
          <label><input type="checkbox" id="social"/>Social</label>
          <label><input type="checkbox" id="school"/>School</label>
          <input type="submit" value="submit"/>
        </form>
        <h4><span>"</span>Revolutionary space to have our voices heard. We recognize entities in our community that value accessibility, empowerment and inclusion (AEI) for all. The possibilities are endless.<span>"</span>"</h4>
      </section>
    )
  }
});

export default Landing;
