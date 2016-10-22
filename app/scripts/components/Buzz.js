import React from 'react';

const Buzz = React.createClass({
  render: function () {
    return (
      <section className="buzz-section">
        <form onSubmit={this.submitHandler} className="buzz-form">
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="Relationship to Individual with Special Needs"/>
          <label for="business-name"><input list="type" id="business-name" name="business"/></label>
          <datalist id="business">
            <option value="Medical"/>
            <option value="Social"/>
            <option value="School"/>
          </datalist>
        </form>
      </section>
    )
  }
})

export default Buzz;
