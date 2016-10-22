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
    //fetch/ajax request here
    // store.reviews.fetch();
    let businessType = this.props.params.type.substring(5);
    $.ajax({
        type: 'GET',
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
    return (
      <section className="search-list">
        <ul>
        </ul>
      </section>
    )
  }
})

export default Search;
