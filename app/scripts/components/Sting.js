import React from 'react';

const Sting = React.createClass({
  submitHandler: function () {
    console.log('sending to server...');
  },
  render: function () {
    return (
      <section className="buzz-section">
        <h1>Sting</h1>
        <form onSubmit={this.submitHandler} className="sting-form">
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="Relationship to Individual with Special Needs"/>
          <select>
           <option value="medical">Medical</option>
           <option value="social">Social</option>
           <option value="school">School</option>
          </select>
          <label htmlFor="sting-why">Why Stingworthy?</label>
          <textarea id="sting-why"></textarea>
          <label htmlFor="sting-aei">Please choose at least one Stingworthy deficit</label>
          <label><input type="checkbox" id="accessibility"/>Accessibility</label>
          <label><input type="checkbox" id="empowerment"/>Empowerment</label>
          <label><input type="checkbox" id="Inclusion"/>Inclusion</label>
          <input type="submit" value="Submit"/>
        </form>
      </section>
    )
  }
})

export default Sting;
