import React from 'react';
import $ from 'jquery';
import store from '../store';


const Buzz = React.createClass({
  submitHandler: function (e) {
    e.preventDefault();
    // console.log('sending to server...');
    let buzzOrSting = this.props.route.path.substring(1);
    // console.log(buzzOrSting);
    // console.log(document.querySelectororAll('form-checkbox:checked').value);
    console.log(document.getElementById('form-checkbox').checked);
    let data = {
      business: {
        name: this.refs.business.value,
        business_type: document.getElementById('business-type').value,
        // business: this.refs.business.value,
        zip_code: this.refs.zipcode.value,
      },
      review: {
        // feedback_type: document.getElementById('form-checkbox').checked,
        // relationship_type: document.getElementById('relationship-type').value,
        // feedback_comment: this.refs.buzzwhy.value
      }
      // businesses, permitted fields: :name, :business_type, :stings, :buzzes, :phone_number, :zip_code
      // reviews: :business_id, :feedback_type, :relationship_type, :feedback_comment
    }
      console.log(data);
      // store.businesses.create(data);
    // $.ajax({
    //     type: 'POST',
    //     url: `https://serene-river-21105.herokuapp.com/businesses`,
    //     beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    //     data: JSON.stringify(data),
    //     contentType: 'application/json',
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
        <div className="clearfix">
        </div>
        <div className="buzz-form">
          <h1 id="buzz-header">Leave A Buzz</h1>
          <img src="../../../assets/images/Buzz.png"/>
        <form onSubmit={this.submitHandler}>
          <div className="form-section">
            <label>Your Name</label>
            <input type="text" placeholder="name" ref="name"/>
          </div>

          <div className="form-section">
            <label>Name</label>
            <input type="text" placeholder="Name of Business" ref="business"/>
          </div>
          <div className="form-section">
            <label>Zip Code</label>
            <input type="text" placeholder="Zip code of Business" ref="zipcode"/>
          </div>
          <div className="form-section">
            <label>Type of Business</label>
             <select id='business-type'>
                 <option>Search</option>
                 <option ref="medical" id="0" value='medical'>Medical</option>
                 <option ref="social" id="1" value='social'>Social</option>
                 <option ref="school" id="2" value='school'>School</option>
              </select>
          </div>
          <div className="form-textarea">
            <label htmlFor="buzz-why">Why Buzzworthy?</label>
            <textarea id="buzz-why" ref="buzzwhy"></textarea>
          </div>
          <div className="form-checkbox">
            <label htmlFor="buzz-aei">Please choose at least one Buzzworthy value</label>
            <label><input className="form-checkbox" type="checkbox" value="accessibility" name="accessibility"/>Accessibility</label>
            <label><input className="form-checkbox" type="checkbox" value="empowerment" name="empowerment"/>Empowerment</label>
            <label><input className="form-checkbox" type="checkbox" value="inclusion" name="inclusion"/>Inclusion</label>
          </div>
          <button onClick={this.submitHandler}>Submit</button>
        </form>
        </div>
      </section>
    )
  }
});

export default Buzz;
//
// <div className="form-section">
//   <label>Relationship</label>
//   <select id='relationship-type'>
//       <option>Search</option>
//       <option ref="self" id="0" value='self'>Self</option>
//       <option ref="parent" id="1" value='parent/guardian'>Parent/Guardian</option>
//       <option ref="professional" id="2" value='professional'>Teacher/Professional</option>
//       <option ref="other" id="2" value='other'>Other Friends and Family</option>
//       <option ref="community" id="2" value='community'>Community Member</option>
//    </select>
// </div>
