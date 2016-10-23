import React from 'react';
import store from '../store';
import $ from 'jquery';
import SearchSingle from './SearchSingle.js';

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
      let id  = review.attributes.id;
      let name = review.attributes.name;
      let number = review.attributes.phone_number;
      let address = review.attributes.address;
      let buzzes = review.attributes.buzzes;
      let stings = review.attributes.stings;
      // let stings = Math.floor((review.attributes.stings / review.attributes.total) * 100);

      return <SearchSingle key={i} id={id} name={name} number={number} address={address} buzzes={buzzes} stings={stings}/>
    });
    return (
      <section className="search-list">
        <ul>
          {reviews}
        </ul>
      </section>
    )
  }
})

export default Search;
