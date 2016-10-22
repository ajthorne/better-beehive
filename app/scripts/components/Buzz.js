import React from 'react';

const Buzz = React.createClass({
  submitHandler: function () {
    console.log('sending to server...');
  },
  render: function () {
    return (
      <section className="buzz-section">
        <h1>Buzz</h1>
        <form onSubmit={this.submitHandler} className="buzz-form">
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="Relationship to Individual with Special Needs"/>
          <input type="text" placeholder="Name of Business"/>
          <input type="text" placeholder="Zip code of Business"/>
          <input type='text' list='business-type'/>
          <datalist id='business-type'>
            <option label='medical' value='Medical'/>
            <option label='social' value='Social'/>
            <option label='school' value='School'/>
          </datalist>
          <label htmlFor="buzz-why">Why Buzzworthy?</label>
          <textarea id="buzz-why"></textarea>
          <label htmlFor="buzz-aei">Please choose at least one Buzzworthy value</label>
          <label><input type="checkbox" id="accessibility"/>Accessibility</label>
          <label><input type="checkbox" id="empowerment"/>Empowerment</label>
          <label><input type="checkbox" id="Inclusion"/>Inclusion</label>
          <input type="submit" value="Submit"/>
        </form>
      </section>
    )
  }
});

export default Buzz;

//for relationship data- self, parent/guardian, other family/friend, teacher/professional, community member
