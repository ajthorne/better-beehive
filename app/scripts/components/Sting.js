import React from 'react';

const Sting = React.createClass({
  submitHandler: function () {
    console.log('sending to server...');
  },
  render: function () {
    return (
      <section className="buzz-section">
      <div className="logo-section">
        <img src="../../../assets/images/happybee.png"/>
        <h4>Better Beehive Project</h4>
      </div>
      <div className="buzz-form">
        <h1 id="sting-header">Leave A Sting</h1>
        <img src="../../../assets/images/Buzz.png"/>
      <form onSubmit={this.submitHandler}>
        <div className="form-section">
          <label>Your Name</label>
          <input type="text" placeholder="name"/>
        </div>
        <div className="form-section">
          <label>Relationship</label>
          <input type="text" placeholder="Relationship to Individual with Special Needs"/>
        </div>
        <div className="form-section">
          <label>Name</label>
          <input type="text" placeholder="Name of Business"/>
        </div>
        <div className="form-section">
          <label>Zip Code</label>
          <input type="text" placeholder="Zip code of Business"/>
        </div>
        <div className="form-section">
          <label>Type of Business</label>
          <input type='text' list='business-type'/>
          <datalist id='business-type'>
            <option label='medical' value='Medical'/>
            <option label='social' value='Social'/>
            <option label='school' value='School'/>
          </datalist>
        </div>
        <div className="form-textarea">
        <label htmlFor="buzz-why">Why Stingworthy?</label>
          <textarea id="buzz-why"></textarea>
        </div>
        <div className="form-section">
          <label htmlFor="buzz-aei">Please choose at least one Stingworthy deficit</label>
          <label><input type="checkbox" id="accessibility"/>Accessibility</label>
          <label><input type="checkbox" id="empowerment"/>Empowerment</label>
          <label><input type="checkbox" id="inclusion"/>Inclusion</label>
        </div>
        <button onClick={this.submitHandler}>Submit</button>
      </form>
      </div>
    </section>
    )
  }
})

export default Sting;
