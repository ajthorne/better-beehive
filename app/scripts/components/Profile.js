import React from 'react';
import store from '../store';
import ProfileSingle from './ProfileSingle';

const Profile = React.createClass({
  getInitialState: function () {
    return {
      businesses: store.businesses.toJSON()
    }
  },

  updateState: function () {
    this.setState({
    businesses: store.businesses.toJSON()
  })
  },
  componentWillMount: function () {
    let businessId = this.props.params.id;
    store.businesses.on('update', this.updateState);
    store.businesses.fetch({
      url: `https://serene-river-21105.herokuapp.com/reviews/${businessId}`,
      success: function (response) {
        // console.log(response);
      }
    });
  },
  componentWillUnmount: function () {
    store.businesses.off('update change', this.updateState);
  },

  render: function () {
    // console.log(store.businesses);
    let business = store.businesses.map((business, i, arr) => {
      let id = business.attributes.business.id;
      let name = business.attributes.business.name;
      let address = business.attributes.business.address;
      let number = business.attributes.business.phone_number;
      let buzzes = business.attributes.business.buzzes;
      let stings = business.attributes.business.stings;
      let comment = business.attributes.reviews[0];
      //change for future...only renders first review
      // let businessRating = business.attributes.reviews.map((item) => {
      //   let comment = item.feedback_comment;
      // })
      return <ProfileSingle key={i} id={id} name={name} address={address} number={number} buzzes={buzzes} stings={stings} comment={comment}/>
    });
    return (
      <section className="profile-container">
      <div className="logo-section">
        <img src="../../../assets/images/happybee.png"/>
        <h4>Better <span>Beehive</span> Project</h4>
      </div>
      <div className="clearfix">
      </div>
      <div className="business-container">
        {business}
      </div>
      </section>
    )
  }
});

export default Profile;
