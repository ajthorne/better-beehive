import React from 'react';

const Buzz = React.createClass({
  submitHandler: function () {
    console.log('sending to server...');
    // $.ajax({
    //     type: 'POST',
    //     url: `https://serene-river-21105.herokuapp.com/businesses`,
    //     data: json.stringify()
    //     success: function (response) {
    //       console.log(response);
    //     }
    //   });
    },
  render: function () {
    return (
      <section className="buzz-section">
        <div className="logo-section">
          <img src="../../../assets/images/happybee.png"/>
          <h4>Better <span>Beehive</span> Project</h4>
        </div>
        <div className="buzz-form">
          <h1 id="buzz-header">Leave A Buzz</h1>
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
            <label htmlFor="buzz-why">Why Buzzworthy?</label>
            <textarea id="buzz-why"></textarea>
          </div>
          <div className="form-checkbox">
            <label htmlFor="buzz-aei">Please choose at least one Buzzworthy value</label>
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
});

export default Buzz;

//for relationship data- self, parent/guardian, other family/friend, teacher/professional, community member
