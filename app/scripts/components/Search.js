import React from 'react';
import store from '../store';
import $ from 'jquery';

const Search = React.createClass({
  getInitialState: function () {
    // console.log(this.props);
    return {
    reviews: store.reviews.toJSON(),
    // businesses: store.businesses.toJSON()
    }
  },

  updateState: function () {
    this.setState({
    reviews: store.reviews.toJSON(),
    //businesses: store.businesses.toJSON()
  })
  },
  componentWillMount: function () {
    let businessType = this.props.params.type.substring(5);
    store.reviews.on('update', this.updateState);
    store.reviews.fetch({
      url: `https://serene-river-21105.herokuapp.com/reviews/search?type=${businessType}`,
      success: function (response) {
        console.log(response);
      }
    });
  },
  componentWillUnmount: function () {
    store.reviews.off('update change', this.updateState);
    // store.businesses.off('update change', this.updateState)
  },

  render: function () {
    console.log(store.reviews);
    let reviews = store.reviews.map((review, i, arr) => {
      console.log('review:', review.attributes);
      console.log('address:', review.attributes.address);
      console.log('buzzes:', review.attributes.buzzes);
      console.log('name:', review.attributes.name);
      console.log('stings:', review.attributes.stings);
      console.log('number:', review.attributes.phone_number);
    });
    return (
      <section className="search-list">
        <ul>
        </ul>
      </section>
    )
  }
})

export default Search;
